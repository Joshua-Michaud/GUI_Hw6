/*
Name: Joshua Michaud
Email: Joshua_Michaud@student.uml.edu
Affiliation: Student at Umass Lowell Computer Science
Date: 11/12/2020
Description: This webpage is uses JavaScript to create a Multiplication Table and jQuery
validation Plugin is used for error handling
Location: github
91.461 Assignment: Assignment #6
Joshua Michaud, UMass Lowell Computer Science,
Copyright (c) 2020 by Joshua Michaud. All rights reserved. May be
freely copied or excerpted for educational purposes with credit to the author.
*/

//ready event method
$(function(){
    //https://jqueryvalidation.org/jQuery.validator.addMethod/ used to test is xMin is larger than xMax
    $.validator.addMethod("xMinIsLarger", function(value, element, params) {
        return this.optional(element) || parseInt(value) >= parseInt($(params).val());
    }, "The X Max must be Larger than X Min");

    //test is y Min is Larger than y Max
    $.validator.addMethod("yMinIsLarger", function(value, element, params) {
        return this.optional(element) || parseInt(value) >= parseInt($(params).val());
    }, "The Y Max must be Larger than Y Min");

    //new method to test input validation to make sure its an integer
    $.validator.addMethod("integer", function(value){
        return value % 1 == 0;
    },"The value must be an integer.");

    //checks if xMin was changed,
    //it will validate that xMax is greater
    //if the xMax has a valid input.
    $("input#xMin").change(function() {
        if (!(isNaN($("#xMax").val()) || $("#xMax").val() == "")){
          return $('#inputs').data('validator').element("#xMax");
        }
    }),

    //checks if yMin was changed,
    //it will validate that yMax is greater
    //if the yMax has a valid input.
    $("input#yMin").change(function() {
        if (!(isNaN($("#yMax").val()) || $("#yMax").val() == "")){
            return $('#inputs').data('validator').element("#yMax");
        }
    })

    let $inputForm = $("#inputs");
    if($inputForm.length){
        //validater for with rules
        $inputForm.validate({
            rules:{
                xMin: {
                    required: true,
                    //sets a range for input to only be -50 to 50
                    range:[-50,50],
                    number: true,
                    integer: true

                },

                xMax: {
                    required: true,
                    range:[-50,50],
                    number: true,
                    integer: true,
                    xMinIsLarger: "#xMin"
                },

                yMin: {
                    required: true,
                    range:[-50,50],
                    number: true,
                    integer: true
                },

                yMax: {
                    required: true,
                    range:[-50,50],
                    number: true,
                    integer: true,
                    yMinIsLarger: "#yMin"
                }
            },
            //Error messages
            messages:{
                xMin: {
                    required: "Please Enter a Valid X Min integer",
                    number: "Please only enter integers"
                },
                xMax: {
                    required: "Please Enter a Valid X Max integer",
                    number: "Please only enter integers"
                },
                yMin: {
                    required: "Please Enter a Valid Y Min integer",
                    number: "Please only enter integers"
                },
                yMax: {
                    required: "Please Enter a Valid Y Max integer",
                    number: "Please only enter integers"
                }
            }
      });
    }

    //Function to create table when submit button is pressed
    $("#subButton").click(function(){
       if ($('#inputs').valid())
       {
           InputValidation()
       }
   });

   //https://stackoverflow.com/questions/2086287/how-to-clear-jquery-validation-error-messages
   //Function to clear error messages and table
   $("#resetButton").click(function(){
       let validator = $("#inputs").validate();
       validator.resetForm();
       clearTable();
  });
});
