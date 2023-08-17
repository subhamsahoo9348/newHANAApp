const updateJson = require('./controller/View1.controller.js');
let json = [
    {
        "PAGEID": 1,
        "DESCRIPTION": "About Variant Configuration Planner",
        "PARENTNODEID": 0,
        "HEIRARCHYLEVEL": 1,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(1)"
        }
    },
    {
        "PAGEID": 2,
        "DESCRIPTION": "Architecture",
        "PARENTNODEID": 0,
        "HEIRARCHYLEVEL": 1,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(2)"
        }
    },
    {
        "PAGEID": 3,
        "DESCRIPTION": "Integration",
        "PARENTNODEID": 0,
        "HEIRARCHYLEVEL": 1,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(3)"
        }
    },
    {
        "PAGEID": 4,
        "DESCRIPTION": "Benefits of VC Planner",
        "PARENTNODEID": 1,
        "HEIRARCHYLEVEL": 2,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(4)"
        }
    },
    {
        "PAGEID": 5,
        "DESCRIPTION": "Applications",
        "PARENTNODEID": 0,
        "HEIRARCHYLEVEL": 1,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(5)"
        }
    },
    {
        "PAGEID": 6,
        "DESCRIPTION": "Master Data Applications",
        "PARENTNODEID": 5,
        "HEIRARCHYLEVEL": 2,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(6)"
        }
    },
    {
        "PAGEID": 7,
        "DESCRIPTION": "Location",
        "PARENTNODEID": 6,
        "HEIRARCHYLEVEL": 3,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(7)"
        }
    },
    {
        "PAGEID": 8,
        "DESCRIPTION": "Customer Group",
        "PARENTNODEID": 6,
        "HEIRARCHYLEVEL": 3,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(8)"
        }
    },
    {
        "PAGEID": 9,
        "DESCRIPTION": "SDI Integration",
        "PARENTNODEID": 3,
        "HEIRARCHYLEVEL": 2,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(9)"
        }
    },
    {
        "PAGEID": 10,
        "DESCRIPTION": "Product",
        "PARENTNODEID": 6,
        "HEIRARCHYLEVEL": 3,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(10)"
        }
    },
    {
        "PAGEID": 11,
        "DESCRIPTION": "Location-Product",
        "PARENTNODEID": 6,
        "HEIRARCHYLEVEL": 3,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(11)"
        }
    },
    {
        "PAGEID": 12,
        "DESCRIPTION": "Product Configuration",
        "PARENTNODEID": 6,
        "HEIRARCHYLEVEL": 3,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(12)"
        }
    },
    {
        "PAGEID": 13,
        "DESCRIPTION": "Bill of Materials",
        "PARENTNODEID": 6,
        "HEIRARCHYLEVEL": 3,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(13)"
        }
    },
    {
        "PAGEID": 14,
        "DESCRIPTION": "BTP Master Data Applications",
        "PARENTNODEID": 5,
        "HEIRARCHYLEVEL": 2,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(14)"
        }
    },
    {
        "PAGEID": 15,
        "DESCRIPTION": "Create PVS Nodes",
        "PARENTNODEID": 14,
        "HEIRARCHYLEVEL": 3,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(15)"
        }
    },
    {
        "PAGEID": 16,
        "DESCRIPTION": "BOM-Product Variant Structure",
        "PARENTNODEID": 14,
        "HEIRARCHYLEVEL": 3,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(16)"
        }
    },
    {
        "PAGEID": 17,
        "DESCRIPTION": "Maintain Prediction Profile",
        "PARENTNODEID": 14,
        "HEIRARCHYLEVEL": 3,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(17)"
        }
    },
    {
        "PAGEID": 18,
        "DESCRIPTION": "Assign Prediction Profile",
        "PARENTNODEID": 14,
        "HEIRARCHYLEVEL": 3,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(18)"
        }
    },
    {
        "PAGEID": 19,
        "DESCRIPTION": "Transactional Data",
        "PARENTNODEID": 5,
        "HEIRARCHYLEVEL": 2,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(19)"
        }
    },
    {
        "PAGEID": 20,
        "DESCRIPTION": "Sales History",
        "PARENTNODEID": 19,
        "HEIRARCHYLEVEL": 3,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(20)"
        }
    },
    {
        "PAGEID": 21,
        "DESCRIPTION": "IBP Planning View Demand / Option View",
        "PARENTNODEID": 5,
        "HEIRARCHYLEVEL": 2,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(21)"
        }
    },
    {
        "PAGEID": 22,
        "DESCRIPTION": "Job Scheduling",
        "PARENTNODEID": 5,
        "HEIRARCHYLEVEL": 2,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(22)"
        }
    },
    {
        "PAGEID": 23,
        "DESCRIPTION": "Job Scheduling",
        "PARENTNODEID": 22,
        "HEIRARCHYLEVEL": 3,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(23)"
        }
    },
    {
        "PAGEID": 24,
        "DESCRIPTION": "Components Requirement",
        "PARENTNODEID": 5,
        "HEIRARCHYLEVEL": 2,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(24)"
        }
    },
    {
        "PAGEID": 25,
        "DESCRIPTION": "Assembly Requirements",
        "PARENTNODEID": 24,
        "HEIRARCHYLEVEL": 3,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(25)"
        }
    },
    {
        "PAGEID": 26,
        "DESCRIPTION": "Components Requirement",
        "PARENTNODEID": 24,
        "HEIRARCHYLEVEL": 3,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(26)"
        }
    },
    {
        "PAGEID": 27,
        "DESCRIPTION": "Job Scheduling",
        "PARENTNODEID": 0,
        "HEIRARCHYLEVEL": 1,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(27)"
        }
    },
    {
        "PAGEID": 28,
        "DESCRIPTION": "SDI Integration",
        "PARENTNODEID": 27,
        "HEIRARCHYLEVEL": 2,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(28)"
        }
    },
    {
        "PAGEID": 29,
        "DESCRIPTION": "Time Series for History",
        "PARENTNODEID": 27,
        "HEIRARCHYLEVEL": 2,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(29)"
        }
    },
    {
        "PAGEID": 30,
        "DESCRIPTION": "IBP Integration",
        "PARENTNODEID": 27,
        "HEIRARCHYLEVEL": 2,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(30)"
        }
    },
    {
        "PAGEID": 31,
        "DESCRIPTION": "IBP Export",
        "PARENTNODEID": 30,
        "HEIRARCHYLEVEL": 3,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(31)"
        }
    },
    {
        "PAGEID": 32,
        "DESCRIPTION": "IBP Import",
        "PARENTNODEID": 30,
        "HEIRARCHYLEVEL": 3,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(32)"
        }
    },
    {
        "PAGEID": 33,
        "DESCRIPTION": "Time Series for Future",
        "PARENTNODEID": 27,
        "HEIRARCHYLEVEL": 2,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(33)"
        }
    },
    {
        "PAGEID": 34,
        "DESCRIPTION": "Model Generation",
        "PARENTNODEID": 27,
        "HEIRARCHYLEVEL": 2,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(34)"
        }
    },
    {
        "PAGEID": 35,
        "DESCRIPTION": "Predictions",
        "PARENTNODEID": 27,
        "HEIRARCHYLEVEL": 2,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(35)"
        }
    },
    {
        "PAGEID": 36,
        "DESCRIPTION": "User Roles",
        "PARENTNODEID": 0,
        "HEIRARCHYLEVEL": 1,
        "__metadata": {
            "type": "CatalogService.getPageHdr",
            "uri": "https://port4004-workspaces-ws-gc9qz.us10.applicationstudio.cloud.sap/v2/catalog/getPageHdr(36)"
        }
    }
]

if(updateJson) json = updateJson;

module.exports = json;