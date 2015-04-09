angular.module('assessmentEvaluationApp')
    .controller('QuestionsCtrl', function($scope, $location, Results) {
        $scope.AA = [];
        $scope.BAS = [];
        $scope.CO = [];
        $scope.HVAC = [];
        $scope.MA = [];
        $scope.MBC = [];
        $scope.MOS = [];
        $scope.PT = [];
        $scope.WE = [];
        $scope.CSS = [];

        var show = true;

        $scope.off = function() {
            show = false;
        }

        $scope.showButton = function() {
            return show;
        }

        var on = function() {
            show = false;
        }

        $scope.questions = [{
            id: 1,
            question: "Which of the following careers most interests you?",
            choices: [{
                choice: "Administrative Assistant",
                id: 1,
                value: false
            }, {
                choice: "Business Accounting Specialist",
                id: 2,
                value: false
            }, 
            {
                choice: "Computer Support Specialist",
                id: 3,
                value: false
            },
            {
                choice: "Cosmetologist",
                id: 4,
                value: false
            },
            {
                choice: "HVAC Technician",
                id: 5,
                value: false
            },
            {
                choice: "Medical Assistant",
                id: 6,
                value: false
            },
            {
                choice: "Medical Biller / Coder",
                id: 7,
                value: false
            },{
                choice: "Medical Office Specialist",
                id: 8,
                value: false
            },
            {
                choice: "Pharmacy Technician",
                id: 9,
                value: false
            },{
                choice: "Welder",
                id: 10,
                value: false
            }]
        }, {
            id: 2,
            question: "Do you like your work to be more focused on...",
            choices: [{
                choice: "Working with your hands",
                id: 1,
                value: false
            }, {
                choice: "Solving problems",
                id: 2,
                value: false
            }, {
                choice: "Having a standard routine",
                id: 3,
                value: false
            }]
        }, {
            id: 3,
            question: "Would you prefer to be recognized...",
            choices: [{
                choice: "In public",
                id: 1,
                value: false
            }, {
                choice: "In private",
                id: 2,
                value: false
            }]
        }, {
            id: 4,
            question: "Which of the following is most important to you...",
            choices: [{
                choice: "Making Money",
                id: 1,
                value: false
            }, {
                choice: "Spend more time with family",
                id: 2,
                value: false
            }, {
                choice: "Be happier at work",
                id: 3,
                value: false
            }]
        }, {
            id: 5,
            question: "What motivates you about work?",
            choices: [{
                choice: "The idea of making money",
                id: 1,
                value: false
            }, {
                choice: "Work that allows you to help other people",
                id: 2,
                value: false
            }, {
                choice: "Work that allows you to manage yourself only",
                id: 3,
                value: false
            }, {
                choice: "Personal sense of satisfaction",
                id: 4,
                value: false
            }]
        }, {
            id: 6,
            question: "Are you making the kind of money you want to make?",
            choices: [{
                choice: "Yes",
                id: 1,
                value: false
            }, {
                choice: "No",
                id: 2,
                value: false
            }, {
                choice: "Money doesn't matter",
                id: 3,
                value: false
            }]
        }, {
            id: 7,
            question: "If given a choice, you like to work...",
            choices: [{
                choice: "Alone",
                id: 1,
                value: false
            }, {
                choice: "As a part of a team",
                id: 2,
                value: false
            }]
        }, {
            id: 8,
            question: "In group projects, you prefer to...",
            choices: [{
                choice: "Be the leader with all the associated risks that come with a leadership role",
                id: 1,
                value: false
            }, {
                choice: "Be a team member with the risk spread among the team membership",
                id: 2,
                value: false
            }]
        }, {
            id: 9,
            question: "Do you prefer...",
            choices: [{
                choice: "Mastering a wide variety of work and tasks",
                id: 1,
                value: false
            }, {
                choice: "Mastering fewer tasks",
                id: 2,
                value: false
            }, {
                choice: "Mastering one task and staying with that task for a long time",
                id: 3,
                value: false
            }]
        }, {
            id: 10,
            question: "Do you like your work to be...",
            choices: [{
                choice: "As perfect as you can get it no matter how long it takes",
                id: 1,
                value: false
            }, {
                choice: "Be done right, but it does not have to be absolutely perfect",
                id: 2,
                value: false
            }]
        }, {
            id: 11,
            question: "Which of the following do you feel is your greatest strength ?",
            choices: [{
                choice: "Team player",
                id: 1,
                value: false
            }, {
                choice: "Hardwork",
                id: 2,
                value: false
            }, {
                choice: "Punctual",
                id: 3,
                value: false
            }, {
                choice: "Creative",
                id: 4,
                value: false
            }, {
                choice: "Dependable",
                id: 5,
                value: false
            }]
        }, {
            id: 12,
            question: "Which environment best suits you?",
            choices: [{
                choice: "Sitting behind a desk",
                id: 1,
                value: false
            }, {
                choice: "On the move",
                id: 2,
                value: false
            }, {
                choice: "On your feet",
                id: 3,
                value: false
            }, {
                choice: "Work from home",
                id: 4,
                value: false
            }]
        }, {
            id: 13,
            question: "Choose a specialty that most interests you",
            choices: [{
                choice: "Business",
                id: 1,
                value: false
            }, {
                choice: "Medical",
                id: 2,
                value: false
            }, {
                choice: "Trades",
                id: 3,
                value: false
            }, {
                choice: "Personal Care",
                id: 4,
                value: false
            }, {
                choice: "Doesn't Matter",
                id: 5,
                value: false
            }]
        }, {
            id: 14,
            question: "Duties which you feel most comfortable performing you",
            choices: [{
                choice: "Processing documents",
                id: 1,
                value: false
            }, {
                choice: "On the phone",
                id: 2,
                value: false
            }, {
                choice: "Hands-On with people",
                id: 3,
                value: false
            }, {
                choice: "Hands-On in a technical environment",
                id: 4,
                value: false
            }]
        },   {
            id: 15,
            question: "Would you prefer to service...",
            choices: [{
                choice: "Consumers or customers",
                id: 1,
                value: false
            }, {
                choice: "Business clients",
                id: 2,
                value: false
            }, {
                choice: "Consumer and Business",
                id: 3,
                value: false
            }]
        }]

        $scope.question_index = 0;

        $scope.next = function() {
            if ($scope.question_index >= $scope.questions.length - 1) {
                on();

            } else {
                $scope.question_index++;
                $scope.save($scope.question_index);
            }
        }

        $scope.countResults = function() {
            var array = [$scope.AA, $scope.BAS, $scope.CO, $scope.HVAC, $scope.MA, $scope.MBC, $scope.MOS, $scope.PT, $scope.WE, $scope.CSS];
            console.log(array);
            Results.addResults(array);

        }

        $scope.update = function(user) {
            sessionStorage.setItem("email", user.email);
        };

        $scope.save = function(questionId) {
            console.log(questionId);
            switch (questionId) {
                case 1:
                    console.log("question 1");
                    console.log($scope.questions[questionId - 1].choices[0].value)
                    if ($scope.questions[questionId - 1].choices[0].value) {
                        console.log("Administrative Assistant");
                        $scope.AA.push(30);
                        $scope.BAS.push(0);
                        $scope.CO.push(0);
                        $scope.HVAC.push(0);
                        $scope.MA.push(0);
                        $scope.MBC.push(0);
                        $scope.MOS.push(0);
                        $scope.PT.push(0);
                        $scope.WE.push(0);
                        $scope.CSS.push(0);
                    } else if ($scope.questions[questionId - 1].choices[1].value) {
                        console.log($scope.questions[questionId - 1].choices[1].value);
                        console.log("Business Accounting Specialist");
                        $scope.AA.push(0);
                        $scope.BAS.push(30);
                        $scope.CO.push(0);
                        $scope.HVAC.push(0);
                        $scope.MA.push(0);
                        $scope.MBC.push(0);
                        $scope.MOS.push(0);
                        $scope.PT.push(0);
                        $scope.WE.push(0);
                        $scope.CSS.push(0);
                    } 
                      else if ($scope.questions[questionId - 1].choices[2].value) {
                        console.log($scope.questions[questionId - 1].choices[2].value);
                        console.log("Computer Support Specialist");
                        $scope.AA.push(0);
                        $scope.BAS.push(0);
                        $scope.CO.push(30);
                        $scope.HVAC.push(0);
                        $scope.MA.push(0);
                        $scope.MBC.push(0);
                        $scope.MOS.push(0);
                        $scope.PT.push(0);
                        $scope.WE.push(0);
                        $scope.CSS.push(0);
                    } else if ($scope.questions[questionId - 1].choices[3].value) {
                        console.log($scope.questions[questionId - 1].choices[3].value);
                        console.log("Cosmetologist");
                        $scope.AA.push(0);
                        $scope.BAS.push(0);
                        $scope.CO.push(0);
                        $scope.HVAC.push(30);
                        $scope.MA.push(0);
                        $scope.MBC.push(0);
                        $scope.MOS.push(0);
                        $scope.PT.push(0);
                        $scope.WE.push(0);
                        $scope.CSS.push(0);
                    } else if ($scope.questions[questionId - 1].choices[4].value) {
                        console.log($scope.questions[questionId - 1].choices[4].value);
                        console.log("HVAC Technician");
                        $scope.AA.push(0);
                        $scope.BAS.push(0);
                        $scope.CO.push(0);
                        $scope.HVAC.push(0);
                        $scope.MA.push(30);
                        $scope.MBC.push(0);
                        $scope.MOS.push(0);
                        $scope.PT.push(0);
                        $scope.WE.push(0);
                        $scope.CSS.push(0);
                    } else if ($scope.questions[questionId - 1].choices[5].value) {
                        console.log($scope.questions[questionId - 1].choices[5].value);
                        console.log("Medical Assistant");
                        $scope.AA.push(0);
                        $scope.BAS.push(0);
                        $scope.CO.push(0);
                        $scope.HVAC.push(0);
                        $scope.MA.push(0);
                        $scope.MBC.push(30);
                        $scope.MOS.push(0);
                        $scope.PT.push(0);
                        $scope.WE.push(0);
                        $scope.CSS.push(0);
                    } else if ($scope.questions[questionId - 1].choices[6].value) {
                        console.log($scope.questions[questionId - 1].choices[6].value);
                        console.log("Medical Biller / Coder");
                        $scope.AA.push(0);
                        $scope.BAS.push(0);
                        $scope.CO.push(0);
                        $scope.HVAC.push(0);
                        $scope.MA.push(0);
                        $scope.MBC.push(0);
                        $scope.MOS.push(30);
                        $scope.PT.push(0);
                        $scope.WE.push(0);
                        $scope.CSS.push(0);
                    } else if ($scope.questions[questionId - 1].choices[7].value) {
                        console.log($scope.questions[questionId - 1].choices[7].value);
                        console.log("Medical Office Specialist");
                        $scope.AA.push(0);
                        $scope.BAS.push(0);
                        $scope.CO.push(0);
                        $scope.HVAC.push(0);
                        $scope.MA.push(0);
                        $scope.MBC.push(0);
                        $scope.MOS.push(0);
                        $scope.PT.push(30);
                        $scope.WE.push(0);
                        $scope.CSS.push(0);
                    } else if ($scope.questions[questionId - 1].choices[8].value) {
                        console.log($scope.questions[questionId - 1].choices[8].value);
                        console.log("Pharmacy Technician");
                        $scope.AA.push(0);
                        $scope.BAS.push(0);
                        $scope.CO.push(0);
                        $scope.HVAC.push(0);
                        $scope.MA.push(0);
                        $scope.MBC.push(0);
                        $scope.MOS.push(0);
                        $scope.PT.push(0);
                        $scope.WE.push(30);
                        $scope.CSS.push(0);
                    } else {
                        console.log("Welder");
                        $scope.AA.push(0);
                        $scope.BAS.push(0);
                        $scope.CO.push(0);
                        $scope.HVAC.push(0);
                        $scope.MA.push(0);
                        $scope.MBC.push(0);
                        $scope.MOS.push(0);
                        $scope.PT.push(0);
                        $scope.WE.push(0);
                        $scope.CSS.push(30);
                    }
                    break;
                case 2:
                    console.log("question 2");
                    if ($scope.questions[questionId - 1].choices[0].value) {
                        console.log("first answer");
                        console.log($scope.questions[questionId - 1].choices[0].value);
                        $scope.AA.push(4);
                        $scope.BAS.push(4);
                        $scope.CO.push(10);
                        $scope.HVAC.push(10);
                        $scope.MA.push(10);
                        $scope.MBC.push(4);
                        $scope.MOS.push(4);
                        $scope.PT.push(8);
                        $scope.WE.push(10);
                        $scope.CSS.push(10);
                    } else if ($scope.questions[questionId - 1].choices[1].value) {
                        console.log("you selected the second answer");
                        $scope.AA.push(8);
                        $scope.BAS.push(8);
                        $scope.CO.push(6);
                        $scope.HVAC.push(8);
                        $scope.MA.push(8);
                        $scope.MBC.push(8);
                        $scope.MOS.push(8);
                        $scope.PT.push(6);
                        $scope.WE.push(8);
                        $scope.CSS.push(10);
                    } else {
                        console.log("third answer")
                        $scope.AA.push(10);
                        $scope.BAS.push(10);
                        $scope.CO.push(4);
                        $scope.HVAC.push(6);
                        $scope.MA.push(6);
                        $scope.MBC.push(10);
                        $scope.MOS.push(10);
                        $scope.PT.push(10);
                        $scope.WE.push(8);
                        $scope.CSS.push(6);
                    }
                    break;
                case 3:
                    console.log("question 3");
                    if ($scope.questions[questionId - 1].choices[0].value) {
                        console.log("first answer");
                        $scope.AA.push(10);
                        $scope.BAS.push(5);
                        $scope.CO.push(10);
                        $scope.HVAC.push(10);
                        $scope.MA.push(8);
                        $scope.MBC.push(5);
                        $scope.MOS.push(8);
                        $scope.PT.push(8);
                        $scope.WE.push(8);
                        $scope.CSS.push(10);
                    } else {
                        console.log("you selected the second answer");
                        $scope.AA.push(5);
                        $scope.BAS.push(10);
                        $scope.CO.push(5);
                        $scope.HVAC.push(5);
                        $scope.MA.push(9);
                        $scope.MBC.push(9);
                        $scope.MOS.push(9);
                        $scope.PT.push(3);
                        $scope.WE.push(5);
                        $scope.CSS.push(10);
                    }
                    break;
                case 4:
                    console.log("question 4");
                    if ($scope.questions[questionId - 1].choices[0].value) {
                        console.log("first answer");
                        $scope.AA.push(7);
                        $scope.BAS.push(8);
                        $scope.CO.push(7);
                        $scope.HVAC.push(10);
                        $scope.MA.push(6);
                        $scope.MBC.push(7);
                        $scope.MOS.push(7);
                        $scope.PT.push(8);
                        $scope.WE.push(10);
                        $scope.CSS.push(7);
                    } else if ($scope.questions[questionId - 1].choices[1].value) {
                        console.log("you selected the second answer");
                        $scope.AA.push(8);
                        $scope.BAS.push(8);
                        $scope.CO.push(6);
                        $scope.HVAC.push(5);
                        $scope.MA.push(6);
                        $scope.MBC.push(10);
                        $scope.MOS.push(8);
                        $scope.PT.push(6);
                        $scope.WE.push(5);
                        $scope.CSS.push(7);
                    } else {
                        $scope.AA.push(8);
                        $scope.BAS.push(8);
                        $scope.CO.push(8);
                        $scope.HVAC.push(8);
                        $scope.MA.push(8);
                        $scope.MBC.push(8);
                        $scope.MOS.push(8);
                        $scope.PT.push(8);
                        $scope.WE.push(8);
                        $scope.CSS.push(10);
                    }
                    break;
                case 5:
                    console.log("question 5");
                    if ($scope.questions[questionId - 1].choices[0].value) {
                        console.log("first answer");
                        $scope.AA.push(7);
                        $scope.BAS.push(8);
                        $scope.CO.push(7);
                        $scope.HVAC.push(10);
                        $scope.MA.push(6);
                        $scope.MBC.push(7);
                        $scope.MOS.push(7);
                        $scope.PT.push(8);
                        $scope.WE.push(10);
                        $scope.CSS.push(7);
                    } else if ($scope.questions[questionId - 1].choices[1].value) {
                        console.log("you selected the second answer");
                        $scope.AA.push(10);
                        $scope.BAS.push(5);
                        $scope.CO.push(10);
                        $scope.HVAC.push(8);
                        $scope.MA.push(10);
                        $scope.MBC.push(5);
                        $scope.MOS.push(10);
                        $scope.PT.push(5);
                        $scope.WE.push(5);
                        $scope.CSS.push(10);
                    } else if ($scope.questions[questionId - 1].choices[2].value) {
                        $scope.AA.push(6);
                        $scope.BAS.push(6);
                        $scope.CO.push(10);
                        $scope.HVAC.push(8);
                        $scope.MA.push(6);
                        $scope.MBC.push(8);
                        $scope.MOS.push(6);
                        $scope.PT.push(6);
                        $scope.WE.push(6);
                        $scope.CSS.push(8);
                    } else {
                        $scope.AA.push(8);
                        $scope.BAS.push(8);
                        $scope.CO.push(8);
                        $scope.HVAC.push(8);
                        $scope.MA.push(8);
                        $scope.MBC.push(8);
                        $scope.MOS.push(8);
                        $scope.PT.push(8);
                        $scope.WE.push(8);
                        $scope.CSS.push(8);
                    }
                    break;
                case 6:
                    console.log("question 6");
                    if ($scope.questions[questionId - 1].choices[0].value) {
                        console.log("first answer");
                        $scope.AA.push(7);
                        $scope.BAS.push(8);
                        $scope.CO.push(7);
                        $scope.HVAC.push(10);
                        $scope.MA.push(6);
                        $scope.MBC.push(7);
                        $scope.MOS.push(7);
                        $scope.PT.push(8);
                        $scope.WE.push(10);
                        $scope.CSS.push(8);
                    } else if ($scope.questions[questionId - 1].choices[1].value) {
                        console.log("you selected the second answer");
                        $scope.AA.push(9);
                        $scope.BAS.push(8);
                        $scope.CO.push(9);
                        $scope.HVAC.push(5);
                        $scope.MA.push(10);
                        $scope.MBC.push(9);
                        $scope.MOS.push(9);
                        $scope.PT.push(8);
                        $scope.WE.push(5);
                        $scope.CSS.push(7);
                    } else {
                        $scope.AA.push(7);
                        $scope.BAS.push(7);
                        $scope.CO.push(7);
                        $scope.HVAC.push(7);
                        $scope.MA.push(7);
                        $scope.MBC.push(7);
                        $scope.MOS.push(7);
                        $scope.PT.push(7);
                        $scope.WE.push(7);
                        $scope.CSS.push(7);
                    }
                    break;
                case 7:
                    console.log("question 7");
                    if ($scope.questions[questionId - 1].choices[0].value) {
                        console.log("first answer");
                        $scope.AA.push(8);
                        $scope.BAS.push(10);
                        $scope.CO.push(8);
                        $scope.HVAC.push(10);
                        $scope.MA.push(6);
                        $scope.MBC.push(7);
                        $scope.MOS.push(8);
                        $scope.PT.push(6);
                        $scope.WE.push(10);
                        $scope.CSS.push(10);
                    } else {
                        console.log("you selected the second answer");
                        $scope.AA.push(8);
                        $scope.BAS.push(6);
                        $scope.CO.push(8);
                        $scope.HVAC.push(6);
                        $scope.MA.push(10);
                        $scope.MBC.push(6);
                        $scope.MOS.push(8);
                        $scope.PT.push(10);
                        $scope.WE.push(6);
                        $scope.CSS.push(8);
                    }
                    break;
                case 8:
                    console.log("question 8");
                    if ($scope.questions[questionId - 1].choices[0].value) {
                        console.log("first answer");
                        $scope.AA.push(7);
                        $scope.BAS.push(5);
                        $scope.CO.push(8);
                        $scope.HVAC.push(8);
                        $scope.MA.push(6);
                        $scope.MBC.push(1);
                        $scope.MOS.push(7);
                        $scope.PT.push(3);
                        $scope.WE.push(9);
                        $scope.CSS.push(9);
                    } else {
                        console.log("you selected the second answer");
                        $scope.AA.push(7);
                        $scope.BAS.push(8);
                        $scope.CO.push(6);
                        $scope.HVAC.push(6);
                        $scope.MA.push(8);
                        $scope.MBC.push(10);
                        $scope.MOS.push(7);
                        $scope.PT.push(8);
                        $scope.WE.push(6);
                        $scope.CSS.push(7);
                    }
                    break;
                case 9:
                    console.log("question 9");
                    if ($scope.questions[questionId - 1].choices[0].value) {
                        console.log("first answer");
                        $scope.AA.push(10);
                        $scope.BAS.push(6);
                        $scope.CO.push(7);
                        $scope.HVAC.push(5);
                        $scope.MA.push(8);
                        $scope.MBC.push(2);
                        $scope.MOS.push(10);
                        $scope.PT.push(6);
                        $scope.WE.push(3);
                        $scope.CSS.push(8);
                    } else if ($scope.questions[questionId - 1].choices[1].value) {
                        console.log("you selected the second answer");
                        $scope.AA.push(8);
                        $scope.BAS.push(8);
                        $scope.CO.push(8);
                        $scope.HVAC.push(9);
                        $scope.MA.push(8);
                        $scope.MBC.push(8);
                        $scope.MOS.push(8);
                        $scope.PT.push(10);
                        $scope.WE.push(8);
                        $scope.CSS.push(9);
                    } else {
                        $scope.AA.push(1);
                        $scope.BAS.push(4);
                        $scope.CO.push(7);
                        $scope.HVAC.push(6);
                        $scope.MA.push(4);
                        $scope.MBC.push(8);
                        $scope.MOS.push(1);
                        $scope.PT.push(3);
                        $scope.WE.push(7);
                        $scope.CSS.push(1);
                    }
                    break;
                case 10:
                    console.log("question 10");
                    if ($scope.questions[questionId - 1].choices[0].value) {
                        console.log("first answer");
                        $scope.AA.push(8);
                        $scope.BAS.push(10);
                        $scope.CO.push(8);
                        $scope.HVAC.push(10);
                        $scope.MA.push(6);
                        $scope.MBC.push(10);
                        $scope.MOS.push(8);
                        $scope.PT.push(10);
                        $scope.WE.push(7);
                        $scope.CSS.push(7);
                    } else {
                        console.log("you selected the second answer");
                        $scope.AA.push(8);
                        $scope.BAS.push(1);
                        $scope.CO.push(4);
                        $scope.HVAC.push(2);
                        $scope.MA.push(8);
                        $scope.MBC.push(1);
                        $scope.MOS.push(8);
                        $scope.PT.push(1);
                        $scope.WE.push(8);
                        $scope.CSS.push(7);
                    }
                    break;
                case 11:
                    console.log("question 11");
                    if ($scope.questions[questionId - 1].choices[0].value) {
                        console.log("first answer");
                        $scope.AA.push(10);
                        $scope.BAS.push(9);
                        $scope.CO.push(5);
                        $scope.HVAC.push(9);
                        $scope.MA.push(10);
                        $scope.MBC.push(6);
                        $scope.MOS.push(10);
                        $scope.PT.push(10);
                        $scope.WE.push(5);
                        $scope.CSS.push(9);
                    } else if ($scope.questions[questionId - 1].choices[1].value) {
                        console.log("you selected the second answer");
                        $scope.AA.push(1);
                        $scope.BAS.push(1);
                        $scope.CO.push(10);
                        $scope.HVAC.push(1);
                        $scope.MA.push(1);
                        $scope.MBC.push(1);
                        $scope.MOS.push(1);
                        $scope.PT.push(1);
                        $scope.WE.push(4);
                        $scope.CSS.push(4);
                    } else if ($scope.questions[questionId - 1].choices[2].value) {
                        console.log("you selected the third answer");
                        $scope.AA.push(9);
                        $scope.BAS.push(4);
                        $scope.CO.push(5);
                        $scope.HVAC.push(9);
                        $scope.MA.push(9);
                        $scope.MBC.push(8);
                        $scope.MOS.push(9);
                        $scope.PT.push(6);
                        $scope.WE.push(3);
                        $scope.CSS.push(8);
                    } else if ($scope.questions[questionId - 1].choices[3].value) {
                        console.log("you selected the forth answer");
                        $scope.AA.push(7);
                        $scope.BAS.push(6);
                        $scope.CO.push(6);
                        $scope.HVAC.push(8);
                        $scope.MA.push(6);
                        $scope.MBC.push(6);
                        $scope.MOS.push(7);
                        $scope.PT.push(5);
                        $scope.WE.push(9);
                        $scope.CSS.push(6);
                    } else {
                        $scope.AA.push(6);
                        $scope.BAS.push(2);
                        $scope.CO.push(3);
                        $scope.HVAC.push(4);
                        $scope.MA.push(9);
                        $scope.MBC.push(2);
                        $scope.MOS.push(6);
                        $scope.PT.push(6);
                        $scope.WE.push(4);
                        $scope.CSS.push(3);
                    }
                    break;
                case 12:
                    console.log("question 12");
                    if ($scope.questions[questionId - 1].choices[0].value) {
                        console.log("first answer");
                        $scope.AA.push(9);
                        $scope.BAS.push(10);
                        $scope.CO.push(2);
                        $scope.HVAC.push(1);
                        $scope.MA.push(6);
                        $scope.MBC.push(10);
                        $scope.MOS.push(9);
                        $scope.PT.push(3);
                        $scope.WE.push(2);
                        $scope.CSS.push(10);
                    } else if ($scope.questions[questionId - 1].choices[1].value) {
                        console.log("you selected the second answer");
                        $scope.AA.push(7);
                        $scope.BAS.push(1);
                        $scope.CO.push(5);
                        $scope.HVAC.push(9);
                        $scope.MA.push(5);
                        $scope.MBC.push(1);
                        $scope.MOS.push(7);
                        $scope.PT.push(10);
                        $scope.WE.push(8);
                        $scope.CSS.push(1);
                    } else if ($scope.questions[questionId - 1].choices[2].value) {
                        console.log("you selected the third answer");
                        $scope.AA.push(7);
                        $scope.BAS.push(1);
                        $scope.CO.push(10);
                        $scope.HVAC.push(10);
                        $scope.MA.push(9);
                        $scope.MBC.push(1);
                        $scope.MOS.push(7);
                        $scope.PT.push(8);
                        $scope.WE.push(8);
                        $scope.CSS.push(2);
                    } else {
                        $scope.AA.push(2);
                        $scope.BAS.push(9);
                        $scope.CO.push(7);
                        $scope.HVAC.push(1);
                        $scope.MA.push(1);
                        $scope.MBC.push(6);
                        $scope.MOS.push(2);
                        $scope.PT.push(1);
                        $scope.WE.push(3);
                        $scope.CSS.push(8);
                    }
                    break;
                case 13:
                    console.log("question 13");
                    if ($scope.questions[questionId - 1].choices[0].value) {
                        console.log("first answer");
                        $scope.AA.push(10);
                        $scope.BAS.push(10);
                        $scope.CO.push(8);
                        $scope.HVAC.push(6);
                        $scope.MA.push(1);
                        $scope.MBC.push(3);
                        $scope.MOS.push(5);
                        $scope.PT.push(2);
                        $scope.WE.push(2);
                        $scope.CSS.push(7);

                    } else if ($scope.questions[questionId - 1].choices[1].value) {
                        console.log("you selected the second answer");
                        $scope.AA.push(1);
                        $scope.BAS.push(1);
                        $scope.CO.push(3);
                        $scope.HVAC.push(1);
                        $scope.MA.push(10);
                        $scope.MBC.push(10);
                        $scope.MOS.push(1);
                        $scope.PT.push(10);
                        $scope.WE.push(1);
                        $scope.CSS.push(3);
                    } else if ($scope.questions[questionId - 1].choices[2].value) {
                        console.log("you selected the third answer");
                        $scope.AA.push(1);
                        $scope.BAS.push(2);
                        $scope.CO.push(8);
                        $scope.HVAC.push(10);
                        $scope.MA.push(2);
                        $scope.MBC.push(1);
                        $scope.MOS.push(1);
                        $scope.PT.push(2);
                        $scope.WE.push(10);
                        $scope.CSS.push(6);
                    } else if ($scope.questions[questionId - 1].choices[3].value) {
                        console.log("you selected the forth answer");
                        $scope.AA.push(2);
                        $scope.BAS.push(2);
                        $scope.CO.push(10);
                        $scope.HVAC.push(1);
                        $scope.MA.push(3);
                        $scope.MBC.push(1);
                        $scope.MOS.push(2);
                        $scope.PT.push(3);
                        $scope.WE.push(1);
                        $scope.CSS.push(1);
                    } else {
                        $scope.AA.push(5);
                        $scope.BAS.push(5);
                        $scope.CO.push(5);
                        $scope.HVAC.push(5);
                        $scope.MA.push(5);
                        $scope.MBC.push(5);
                        $scope.MOS.push(5);
                        $scope.PT.push(5);
                        $scope.WE.push(5);
                        $scope.CSS.push(5);
                    }
                    break;
                case 14:
                    console.log("question 14");
                    if ($scope.questions[questionId - 1].choices[0].value) {
                        console.log("first answer");
                        $scope.AA.push(10);
                        $scope.BAS.push(10);
                        $scope.CO.push(4);
                        $scope.HVAC.push(5);
                        $scope.MA.push(7);
                        $scope.MBC.push(10);
                        $scope.MOS.push(10);
                        $scope.PT.push(3);
                        $scope.WE.push(1);
                        $scope.CSS.push(5);
                    } else if ($scope.questions[questionId - 1].choices[1].value) {
                        console.log("you selected the second answer");
                        $scope.AA.push(10);
                        $scope.BAS.push(4);
                        $scope.CO.push(3);
                        $scope.HVAC.push(2);
                        $scope.MA.push(3);
                        $scope.MBC.push(7);
                        $scope.MOS.push(10);
                        $scope.PT.push(5);
                        $scope.WE.push(1);
                        $scope.CSS.push(10);
                    } else if ($scope.questions[questionId - 1].choices[2].value) {
                        console.log("you selected the third answer");
                        $scope.AA.push(2);
                        $scope.BAS.push(1);
                        $scope.CO.push(10);
                        $scope.HVAC.push(1);
                        $scope.MA.push(8);
                        $scope.MBC.push(2);
                        $scope.MOS.push(2);
                        $scope.PT.push(3);
                        $scope.WE.push(1);
                        $scope.CSS.push(1);
                    } else {
                        $scope.AA.push(6);
                        $scope.BAS.push(5);
                        $scope.CO.push(8);
                        $scope.HVAC.push(10);
                        $scope.MA.push(6);
                        $scope.MBC.push(2);
                        $scope.MOS.push(6);
                        $scope.PT.push(6);
                        $scope.WE.push(10);
                        $scope.CSS.push(9);
                    }
                    break;
                    case 15:
                    console.log("question 1");
                    console.log($scope.questions[questionId - 1].choices[0].value)
                    if ($scope.questions[questionId - 1].choices[0].value) {
                        console.log("you selected the first answer");
                        $scope.AA.push(8);
                        $scope.BAS.push(5);
                        $scope.CO.push(10);
                        $scope.HVAC.push(10);
                        $scope.MA.push(10);
                        $scope.MBC.push(5);
                        $scope.MOS.push(4);
                        $scope.PT.push(8);
                        $scope.WE.push(5);
                        $scope.CSS.push(10);
                    } else if ($scope.questions[questionId - 1].choices[1].value) {
                        console.log($scope.questions[questionId - 1].choices[1].value);
                        console.log("you selected the second answer");
                        $scope.AA.push(8);
                        $scope.BAS.push(10);
                        $scope.CO.push(4);
                        $scope.HVAC.push(7);
                        $scope.MA.push(4);
                        $scope.MBC.push(8);
                        $scope.MOS.push(8);
                        $scope.PT.push(5);
                        $scope.WE.push(10);
                        $scope.CSS.push(6);
                    } else {
                        console.log("you selected the third answer");
                        $scope.AA.push(10);
                        $scope.BAS.push(7);
                        $scope.CO.push(7);
                        $scope.HVAC.push(8);
                        $scope.MA.push(7);
                        $scope.MBC.push(8);
                        $scope.MOS.push(10);
                        $scope.PT.push(10);
                        $scope.WE.push(8);
                        $scope.CSS.push(8);
                    }
                    countResults();
                    break;
            }
        };

        $scope.seeResults = function() {
            $location.path('/ResultsPage');
        }
    });