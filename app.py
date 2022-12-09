from flask import Flask, render_template, request, redirect, url_for
import datetime

app = Flask(__name__)


@app.route('/', methods=["POST","GET"])
def main_Menu():
    if request.method == "POST":
        if request.form['submit_button'] == "Save Data":
            import json

            data = {}

            data_to_store = request.form
            for key,value in data_to_store.items():
                data[key] = value

            today_date = str(datetime.date.today())
            with open("Historical Data/" + today_date + '.json', 'w') as f:
                json.dump(data, f)

            return render_template("main.html")


    else:
        return render_template("main.html")



@app.route('/Data', methods=["POST","GET"])
def data_Menu():
    if request.method == "POST":
        pass

    else:
        from Backend import get_Historical_Data
        historical_data = get_Historical_Data()
        print(historical_data["Influent Time"])
        return render_template("test.html", data=historical_data ) #list_of_dates=['11/6','11/7','11/12','11/13'], list_of_data =historical_data["Influent Time"]


if __name__ == '__main__':
    app.run()
