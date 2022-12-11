from flask import Flask, render_template, request, redirect, url_for
import datetime

app = Flask(__name__)

@app.route('/Daily-Lab-Sheet', methods=["POST","GET"])
def daily_Lab_Sheet():
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

            return render_template("Daily Lab Sheet.html")

        if request.form['submit_button'] == "Return Home":


            return redirect(url_for('main_Menu'))


    else:
        return render_template("Daily Lab Sheet.html")

@app.route('/', methods=["POST","GET"])
def main_Menu():
    if request.method == "POST":
        if request.form['submit_button'] == "Main Lab Sheet":


            return redirect(url_for('daily_Lab_Sheet'))

        elif request.form['submit_button'] == "View Data":


            return redirect(url_for('data_Menu'))


    else:
        return render_template("Main Menu.html")



@app.route('/Data', methods=["POST","GET"])
def data_Menu():
    if request.method == "POST":
        if request.form['submit_button'] == "Return Home":
            return redirect(url_for('main_Menu'))

    else:
        from Backend import get_Historical_Data
        historical_data = get_Historical_Data()
        print(historical_data["Influent Time"])
        return render_template("Data Viewer.html", data=historical_data) #list_of_dates=['11/6','11/7','11/12','11/13'], list_of_data =historical_data["Influent Time"]


if __name__ == '__main__':
    app.run()
