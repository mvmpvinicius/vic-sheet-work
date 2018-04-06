$(function() {

    $("#jqGrid").jqGrid({
        url: 'data.json',
        datatype: "json",
        colModel: [{
                label: 'Category Name',
                name: 'CategoryName',
                // width: 75
            }, {
                label: 'Product Name',
                name: 'ProductName',
                // width: 90
            }, {
                label: 'Country',
                name: 'Country',
                // width: 100
            }, {
                label: 'Price',
                name: 'Price',
                // width: 80,
                // sorttype: 'integer'
            },
            // sorttype is used only if the data is loaded locally or loadonce is set to true
            {
                label: 'Quantity',
                name: 'Quantity',
                // width: 80,
                // sorttype: 'number'
            }
        ],
        scroll: 1,
        loadonce: true,
        viewrecords: true,
        width: 1280,
        height: 450,
        // rowNum: 50,
        // rowList: [20, 30, 50, 100],
        rownumbers: true,
        rownumWidth: 25,
        multiselect: true,
        pager: "#jqGridPager",
        jsonReader: {
            repeatitems: false
        }
    });

    getSelectedRows = function() {
        var grid = $('#jqGrid');
        var rowKey = grid.getGridParam('selrow');

        if (!rowKey) {
            alert('Linhas não selecionadas');
        } else {
            var selectedIDs = grid.getGridParam('selarrrow');
            var result = '';
            for (var i = 0; i < selectedIDs.length; i++) {
                result += selectedIDs[i] + ',';
            }

            alert(result);
        }
    }

});