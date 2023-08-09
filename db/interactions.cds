context cp {
    entity UNIQUE_ID_HEADER {
        UNIQUE_ID   : Integer;
        PRODUCT_ID  : String;
        UNIQUE_DESC : String;
        UID_TYPE    : String;
        ACTIVE      : Boolean;

    }

    entity UNIQUE_ID_ITEM {
        UNIQUE_ID       : Integer;
        PRODUCT         : String;
        CHAR_NUM        : String;
        CHAR_NUM_VAL    : String;
        CHAR_VALNUMDESC : String;
    }

    entity CHARVAL_NUM {
        CHAR_NUM        : String;
        CHAR_NUM_VAL    : String;
        CHARVAL_NUM     : String;
        CHAR_VALNUMDESC : String;
    }

    entity SEED_ORDER {
        key SEEDORDER           : String;
            PRODUCT             : String;
            UNIQUE_ID           : String;
            ORDER_QUANTITY      : Integer;
            MATERIAL_AVAIL_DATE : String;
            CREADTED_DATE       : String;
            CREATED_BY          : String;
    }
}
