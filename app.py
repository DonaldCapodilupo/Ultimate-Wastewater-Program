from flask import Flask, render_template, request, redirect, url_for
import datetime

app = Flask(__name__)


@app.route('/', methods=["POST","GET"])
def main_Menu():
    if request.method == "POST":

        button_clicked = request.form['submit_button']

        if button_clicked == "Main Lab Sheet":
            return redirect(url_for('daily_Lab_Sheet'))

        elif button_clicked == "View Data":
            return redirect(url_for('data_Menu'))

        elif button_clicked == "Access Time Clock":
            return redirect(url_for('time_Clock'))

        elif button_clicked == "Take Practice Test":
            return redirect(url_for('practice_Quiz'))

        elif button_clicked == "Check Permit Compliance":
            return redirect(url_for('check_Compliance'))

        elif button_clicked == "Check Weekly Tasks":
            return redirect(url_for('check_Checklists'))


    else:
        return render_template("Main Menu.html")


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

@app.route('/Data', methods=["POST","GET"])
def data_Menu():
    if request.method == "POST":
        if request.form['submit_button'] == "Return Home":
            return redirect(url_for('main_Menu'))

    else:
        from Backend import get_Historical_Data
        historical_data = get_Historical_Data()
        print(historical_data["Influent Time"])
        return render_template("Data Viewer.html",
                               data=historical_data)  # list_of_dates=['11/6','11/7','11/12','11/13'], list_of_data =historical_data["Influent Time"]


@app.route('/Time-Clock', methods=["POST", "GET"])
def time_Clock():
    if request.method == "POST":
        if request.form['submit_button'] == "Return Home":
            return redirect(url_for('main_Menu'))
        elif request.form['submit_button'] == "Punch In":
            from Backend import Time_Clock
            user_input_employee_id = request.form["request_input"]

            time_card_obj = Time_Clock(user_input_employee_id)

            if employee :=time_card_obj.check_Employee_ID():
                print("Logging in user " + employee)
                time_card_obj.log_Employee_Punch()
                return render_template("Time Clock.html", employee_name=employee)




            else:
                print(user_input_employee_id + " is not a valid employee ID.")

                return render_template("Time Clock.html", employee_name="Not A Valid ID")

    else:
        return render_template("Time Clock.html")


@app.route('/Practice-Quiz', methods=["POST", "GET"])
def practice_Quiz():
    if request.method == "POST":
        if request.form['submit_button'] == "Return Home":
            return redirect(url_for('main_Menu'))
    else:
        return render_template("Practice Quiz.html")


@app.route('/Compliance', methods=["POST", "GET"])
def check_Compliance():
    if request.method == "POST":
        if request.form['submit_button'] == "Return Home":
            return redirect(url_for('main_Menu'))
    else:
        return render_template("Compliance.html")


@app.route('/Checklists', methods=["POST", "GET"])
def check_Checklists():
    if request.method == "POST":
        if request.form['submit_button'] == "Return Home":
            return redirect(url_for('main_Menu'))
    else:
        return render_template("Checklists.html")


print("Starting program.")
from Backend import program_Setup_On_Startup
print("Checking to see if the program needs to be set up...")
program_Setup_On_Startup()


if __name__ == '__main__':
    app.run()
