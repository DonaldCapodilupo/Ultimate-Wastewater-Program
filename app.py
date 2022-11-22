from flask import Flask, render_template, request, redirect, url_for

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

            print(data)
            with open('data.json', 'w') as f:
                json.dump(data, f)
            return render_template("main.html")
        # return redirect(url_for("newspaper_Website_Scraper"))

    else:
        return render_template("main.html")


if __name__ == '__main__':
    app.run()
