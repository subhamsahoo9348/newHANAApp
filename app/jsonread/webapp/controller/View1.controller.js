//import axios from 'axios';
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/util/File"
],

    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, axios, file) {
        "use strict";
        var that;
        return Controller.extend("jsonread.controller.View1", {
            onInit: function () {
                //const axios = sap.ui.require('axios');
                that = this;
                fetch('./data/header.json')
                    .then((response) => response.json())
                    .then((json) => console.log(json));

                const jsonString = JSON.stringify({ "done": "DONE" }, null, 2);

                //const blob = new Blob([jsonString], { type: "application/json" });

                //sap.ui.core.util.File.save(jsonString, "./data/header1.json");
                // jQuery.ajax({
                //     type: "PUT",
                //     url: "./data/header.json",
                //     data: jsonString,
                //     contentType: "application/json",
                //     success: function (response) {
                //         console.log(response);
                //     },
                //     error: function (error) {
                //         console.error(error);
                //     }
                // })
                const oModel = that.getOwnerComponent().getModel();
                oModel.callFunction("/crudJSON", {
                    method: "GET",
                    urlParameters: {
                      FLAG: "C",
                      DATA:null
                    },
                    success: function (message) {
                        console.log(message);
                        sap.m.MessageToast.show("DONE");
                    },
                    error: function () {
                      console.log(error);
                      sap.m.MessageToast.show("Create Failed");
                    },
                  });

            }
        });
    });
