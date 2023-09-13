

class Quiz_Generator:
    def __init__(self,):
        import json

        self.question_bank = json.load(open("Test Questions.json", "r")) #Make this a dict?
        self.total_questions = len(self.question_bank.keys())
        self.current_correct_answers = 0

        self.current_score = self.current_correct_answers/ self.total_questions

    def score(self, questions_correct, questions_wrong):
        self.total_questions = len(self.question_bank)
        self.questions_correct = questions_correct
        self.questions_wrong = questions_wrong

        self.questions_percentage= self.questions_correct / self.questions_wrong

        return_string = "You have gotten " + self.questions_correct + " questions correct out of " + str(self.total_questions) + " (" + self.questions_percentage + "%) "
        return {return_string:self.questions_correct / self.questions_wrong}


class Quiz:
    def __init__(self, title):
        self.title = title
        self.questions = []

    def add_question(self, question, choices, answer):
        """
        Add a new question to the quiz.

        Args:
            question (str): The question.
            choices (list): A list of choices for the question.
            answer (str): The correct answer.

        Returns:
            None
        """
        self.questions.append({
            'question': question,
            'choices': choices,
            'answer': answer
        })

    def take_quiz(self):
        """
        Take the quiz by displaying each question and accepting user input.

        Returns:
            int: The final score of the quiz.
        """
        score = 0
        total_questions = len(self.questions)

        print(self.title)
        print("------------------------------")

        for question in self.questions:
            print(question['question'])
            for choice in question['choices']:
                print(choice)
            user_answer = input("Your answer: ")

            if user_answer.lower() == question['answer'].lower():
                print("Correct!")
                score += 1
            else:
                print("Incorrect!")

            print("------------------------------")

        print("Quiz Completed!")
        print("Your Score: {}/{}".format(score, total_questions))
        return score

my_quiz = Quiz("General Knowledge Quiz")

# Add questions to the quiz
my_quiz.add_question("What is the capital of France?", ["A. London", "B. Paris", "C. Rome"], "B")
my_quiz.add_question("What is the largest planet in our solar system?", ["A. Venus", "B. Mars", "C. Jupiter"], "C")
my_quiz.add_question("What is the chemical symbol for gold?", ["A. Au", "B. Ag", "C. Hg"], "A")

# Take the quiz
my_quiz.take_quiz()