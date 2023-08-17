sap.ui.define(
    ["sap/ui/core/mvc/Controller"],

    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
        var that, header;
        return Controller.extend("jsonread.controller.View1", {
            onInit: function () {
                that = this;
                that.createDialog = that.loadFragment({
                    name: "jsonread.view.create",
                });
                that.updateDialog = that.loadFragment({
                    name: "jsonread.view.update",
                });
                const oModel = that.getOwnerComponent().getModel();
                oModel.callFunction("/crudJSON", {
                    method: "GET",
                    urlParameters: {
                        FLAG: "GET",
                        DATA: null,
                    },
                    success: function (message) {
                        header = JSON.parse(message.crudJSON);
                        h= header;
                        that
                            .byId("table")
                            .setModel(new sap.ui.model.json.JSONModel({ item: header }));
                    },
                    error: function (error) {
                        console.log(error);
                        sap.m.MessageToast.show("Failed To GET DATA");
                    },
                });
            },

            getData: function () {
                that
                    .byId("table")
                    .setModel(new sap.ui.model.json.JSONModel({ item: header }));
            },
            onPressCreate: function (oEvent) {
                that.createDialog.then((dialog) => {
                    dialog.open();
                });
            },
            onPressUpdate: function (oEvent) {
                that.updateDialog.then((dialog) => {
                    dialog.open();
                })
                    .then(() => {
                        that.byId("uidInput").setValue(that.byId("table").getSelectedItem().getBindingContext().getObject().PAGEID)
                        that.byId("udescInput").setValue(that.byId("table").getSelectedItem().getBindingContext().getObject().DESCRIPTION)
                    })
            },
            onPressDelete: function () {
                const DATA = that.byId("table").getSelectedItem().getBindingContext().getObject();
                header = header.filter((obj) => obj.PAGEID != DATA.PAGEID);
                that.byId("table").setModel(new sap.ui.model.json.JSONModel({ item: header }));
            },
            onCreate: function (oEvent) {
                const pageId = that.byId("idInput").getValue();
                const desc = that.byId("descInput").getValue();
                header.push({
                    PAGEID: pageId,
                    DESCRIPTION: desc,
                });
                that.byId("table").setModel(new sap.ui.model.json.JSONModel({ item: header }));
                h = header;
                that.onClose();
                //sap.ui.core.util.File.save(JSON.stringify(header),"jsonread.data.header")
            },
            onUpdate: function () {
                const pageId = that.byId("uidInput").getValue();
                const desc = that.byId("udescInput").getValue();
                header.forEach((obj, index) => {
                    if (obj.PAGEID == pageId) header[index].DESCRIPTION = desc;
                })
                that.byId("table").setModel(new sap.ui.model.json.JSONModel({ item: header }));
                that.onCloseUpdate();
            },
            onClose: function () {
                that.byId("createDialog").close();
            },
            onCloseUpdate: function () {
                that.byId("updateDialog").close();
            },
        });
    }
);

module.exports = h;