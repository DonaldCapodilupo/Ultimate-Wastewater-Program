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


def prior_Day_Values():
    prior_data = os.listdir("Historical Data")

    prior_values = prior_data[-1]  # yyyy-mm-dd.json format

    return_data = {prior_values[:-5]: []}

    with open("Historical Data/" + prior_values) as json_item:
        data = json.load(json_item)

        for category, value in data.items():
            try:

                return_data[category].append(value)
            except KeyError:
                return_data[category] = [value]

    print(return_data)
    return return_data

# prior_Day_Values()
