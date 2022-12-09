import os, json

from bs4 import BeautifulSoup
import requests


def scrape_RoyCEU_Questions(url):

    return_dict = {}
    soup = BeautifulSoup("templates/royCEU Templates.html", "html.parser")
    questions = soup.body.find_all(class_='QuestionText')
    answers = soup.body.find_all("li")

    for question in questions:
        print(question)


    #with open('questions.txt', 'a', encoding="utf-8") as f:
    #    for question in questions:
    #        f.write(question.text + "\n")


def scrape_RoyCEU_Answers(url):
    with open("templates/royCEU Template.html") as fp:
        soup = BeautifulSoup(fp, "html.parser")
        #print(soup)

        for question in soup.find_all(class_="QuestionText"):
            print(question)



    #return_dict = {}
#
    #answers = soup.body.find_all("li")
#
    #current_question = ""
#
    #for answer in answers:
    #    answer_text = answer.text
#
    #    if answer_text[0] != " ":
    #        return_dict[answer_text] = []
    #        current_question = answer_text
#
    #    while answer_text[0].isspace():
    #        return_dict[current_question].append(answer_text[7:])
    #        break
    #print(return_dict)






    #with open('answers.txt', 'a', encoding="utf-8") as f:
#
    #    for answer in answers:
    #        answer_text = answer.text
#
    #        if answer_text[0].isspace():
    #            f.write(answer_text + "\n")
    #            print(answer_text[7:])
    #        else:
    #            pass


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


# get_Historical_Data()
scrape_RoyCEU_Answers("https://royceu.com/PracticeQuizes/studyguide1.htm")
#scrape_RoyCEU_Questions("https://royceu.com/PracticeQuizes/studyguide1.htm")
