import os, json

from bs4 import BeautifulSoup


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

    directory_items_to_ignore = [today+".json","Yesterday's Data.json"]

    for item in directory_items_to_ignore:

        try:
            prior_data.remove(item)
        except ValueError:
            print(item + " was not found in the directory.")


    prior_date = prior_data[-1][:-5]  # yyyy-mm-dd format

    return_data = {prior_date: {}}

    with open("Historical Data/" + prior_date + ".json") as json_item:
        data = json.load(json_item)

        for category, value in data.items():
            if category in relevant_values:
                return_data[prior_date][category] = value

    with open("Historical Data/Yesterday's Data.json", "w") as outfile:
        json.dump(return_data, outfile)

    return return_data

get_Prior_Day_Values()