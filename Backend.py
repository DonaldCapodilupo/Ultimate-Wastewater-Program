import os, json, datetime

from bs4 import BeautifulSoup

def program_Setup_On_Startup():

    if not os.path.isdir("Historical Data"):
        print(os.getcwd())
        print("Historical Data Directory not found. Initializing.")
        os.mkdir("Historical Data")
        os.mkdir("Historical Data/Time Cards")
    else:
        print("Historical Data directory is present.")





# Copy/Paste to royCEU Template.html
def scrape_RoyCEU():
    return_dict = {}

    with open("templates/royCEU Template.html", encoding="utf8") as fp:
        soup = BeautifulSoup(fp, "html.parser")
        # print(soup)

        for data in soup.find_all("li", class_="QuizQuestion"):

            question_number = data["id"]
            question = data.text.partition("?")[0].replace('\n        ', ' ').replace("\n", "").replace("    ",
                                                                                                        "") + "?"

            return_dict[question_number] = {question: []}

            for answers in data.find_all("li"):
                answer_id = "Q_" + answers["id"].split("_")[1]
                answer_text = answers.text.replace('\n', " ")[25:]

                return_dict[answer_id][question].append(
                    answer_text[:-13].replace("\u00a0\u00a0                 \u00a0\u00a0", " ").strip())

    with open("Training Questions/royCEU_TestMAth.json", "w") as outfile:
        json.dump(return_dict, outfile)


def get_Historical_Data():
    return_data = {"Dates": []}
    for json_file in os.listdir("Historical Data"):
        return_data["Dates"].append(json_file.replace(".json", ""))
        with open("Historical Data/" + json_file) as json_item:
            data = json.load(json_item)

            for category, value in data.items():
                try:

                    return_data[category].append(value)
                except KeyError:
                    return_data[category] = [value]

    print(return_data)
    return return_data


def get_Prior_Day_Values():
    import datetime

    relevant_values = [
        "Plant Chemicals Today 7,500 Caustic",
        "Plant Chemicals Today 6,000 Hypo",
        "Plant Chemicals Today 5,000 Bisulfite",
        "Plant Chemicals Today 5,000 Sodium Alum",
        "Plant Chemicals Today Press Polymer",
        "Comag Today 3,500 Caustic",
        "Comag Today 7,500 Alum"
        "Comag Today Polymer"
    ]

    prior_data = os.listdir("Historical Data")
    today = str(datetime.date.today())

    directory_items_to_ignore = [today + ".json", "Yesterday's Data.json"]

    last_date_data_was_recorded = \
        [data_json for data_json in os.listdir("Historical Data") if data_json not in directory_items_to_ignore][-1]
    # last_date_of_data_recorded = last_date_data_was_recorded[0:-5]

    with open('Historical Data/' + last_date_data_was_recorded) as json_file:
        data = json.load(json_file)

    for item in directory_items_to_ignore:

        try:
            prior_data.remove(item)
        except ValueError:
            print(item + " was not found in the directory.")

    prior_date = prior_data[-1][:-5]  # yyyy-mm-dd format

    print("Prior Date: " + prior_date)

    return_data = {prior_date: {}}

    with open("Historical Data/" + prior_date + ".json") as json_item:
        data = json.load(json_item)

        for category, value in data.items():
            if category in relevant_values:
                return_data[prior_date][category] = value

    with open("Historical Data/Yesterday's Data.json", "w") as outfile:
        json.dump(return_data, outfile)

    return return_data


class Time_Clock:
    def __init__(self, user_input, ):
        self.user_input = user_input
        self.employee_directory = {
            "001": "Nick",
            "002": "Keith",
            "003": "Chris",
            "004": "Dragan",
            "005": "Dave",
            "006": "Connor",
            "007": "Donald",
            "008": "Shayne",
        }

        self.today = str(datetime.date.today())

        self.setup_files()


    def setup_files(self):


        if os.path.isfile("Historical Data/Time Cards/" + self.today+ ".json"):
            print("There is already a time card created today, no need to create another one.")
            return
        else:

            time_card_obj = {}

            for key, value in self.employee_directory.items():
                time_card_obj[value] = {"Punch In":"",
                                       "Punch Out":"", }

            with open("Historical Data/Time Cards/" + self.today+ ".json","w") as output_file:
                json.dump(time_card_obj, output_file)


    def check_Employee_ID(self):
        import winsound

        try:
            employee = self.employee_directory[self.user_input]
            print("Input: " + self.user_input + " returns user: " + employee)

            duration = 100  # milliseconds
            freq = 550  # 440  # Hz
            winsound.Beep(freq, duration)
            winsound.Beep(freq, duration)


            return employee
        except KeyError:
            print("Input: " + self.user_input + " is not a valid employee ID.")
            winsound.Beep(250, 300)
            return False

    def return_Employee_Name(self):
        return self.employee_directory[self.user_input]

    def log_Employee_Punch(self):

        current_time = datetime.datetime.now().strftime("%H:%M")

        with open("Historical Data/Time Cards/"+ self.today + ".json","r") as json_file:
            current__day_data = json.load(json_file)
            print("This: " + current__day_data[self.employee_directory[self.user_input]]["Punch In"])
            if current__day_data[self.employee_directory[self.user_input]]["Punch In"] =="":
                current__day_data[self.employee_directory[self.user_input]]["Punch In"] = current_time
            else:
                current__day_data[self.employee_directory[self.user_input]]["Punch Out"] = current_time


        with open("Historical Data/Time Cards/"+ self.today + ".json","w") as json_file:
            json.dump(current__day_data, json_file)



class Quiz_Generator:
    def __init__(self,):
        import json

        self.question_bank = json.load(open("Test Questions.json", "r"))
        self.total_questions = len(self.question_bank.keys())
        self.current_correct_answers = 0

        self.current_score = self.current_correct_answers/ self.total_questions



def organize_royCEU_questions_into_one_question_bank():
    final_json = {}
    question_number = 1



    for json_file in os.listdir("Training Questions"):
        with open("Training Questions/" + json_file,"r", encoding="utf8") as open_json_file:
            data = json.load(open_json_file)


            for dictionary in data.values():
                final_json['Question number: ' + str(question_number)] = dictionary
                question_number += 1

    with open("Test Questions.json","w") as json_file:
        json.dump(final_json,json_file)
    print(final_json)


def PDF_data_scraper():
    # importing all the required modules
    import PyPDF2

    # creating a pdf reader object
    reader = PyPDF2.PdfReader('Historical Data/Compliance Reports/Example Compliance Document.pdf')

    # print the number of pages in pdf file
    print(len(reader.pages))

    data_we_care_about = ["Arsenic","Cadmium","Chromium","Copper", "Lead", "Molybdenum", "Nickel", "Silver", "Zinc",
                          "Mercury", "TotalND"]

    # print the text of the first page
    for element in [reader.pages[33].extract_text()]:
        print("Checking: " + element)
        if element in  data_we_care_about :
            print(element + "!!!!!!!!!!!!!!!!!!!!!11")


            #final_json["Question Number " + str(question_number)] = value[0]
            #final_json["Question Number " + str(question_number) + " Answer"] = value[1]

class Changeovers:
    def __init__(self):
        pass














