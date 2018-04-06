<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Tabela Editável</title>
    <meta charset="utf-8">
    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, target-densitydpi=device-dpi" />
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" href="assets/css/normalize.css">
    <link rel="stylesheet" href="assets/css/foundation.css">
    <link rel="stylesheet" href="assets/css/foundation-icons.css">
    <link rel="stylesheet" href="assets/css/modelo.css">
    <link rel="stylesheet" href="assets/css/handsontable.full.css">
    <link rel="stylesheet" href="assets/css/handsontable.formula.css">
    <link rel="stylesheet" href="assets/css/dhtmlxwindows.css">
    <link rel="stylesheet" href="assets/css/dhtmlxtabbar.css">
    <link rel="stylesheet" href="assets/css/dhtmlxtree.css">
    <link rel="stylesheet" href="assets/css/jqueryFileTree.css">
    <link rel="stylesheet" href="assets/css/dropzone.css">
    <link rel="stylesheet" href="assets/css/fileupload.css">
    <link rel="stylesheet" href="assets/css/jquery-ui.css">
    <link rel="stylesheet" href="assets/css/ui.jqgrid.css">

    <link rel="stylesheet" href="assets/css/w2ui-1.4.2.min.css" />
    <!-- // <script src="app/js/jquery.js"></script> -->
    <script src="app/js/jquery-1.7.2.min.js"></script>
    <script src="app/js/jquery.jqGrid.min.js"></script>

    <script src="app/js/w2ui-1.4.2.min.js"></script>
    <script src="app/js/jquery.handsontable.csv.js"></script>

    <script src="app/js/grid.locale-en.js"></script>
    <script src="app/js/jquery.handsontable.csv.js"></script>
    <script src="app/js/jquery.easing.js"></script>
    <script src="app/js/jqueryFileTree.js"></script>
    <script src="app/js/jquery.ui.widget.js"></script>
    <script src="app/js/jquery.iframe-transport.js"></script>
    <script src="app/js/jquery.fileupload.js"></script>
    <script src="app/js/jquery.knob.js"></script>
    <script src="app/js/dropzone.js"></script>
    <script src="app/js/dhtmlxwindows.js"></script>
    <!-- // <script src="app/js/dhtmlxtabbar.js"></script> -->
    <script src="app/js/dhtmlxtree.js"></script>
    <script src="app/js/foundation.min.js"></script>
    <script src="app/js/handsontable.full.js"></script>
    <script src="app/js/handsontable.formula.js"></script>
    <script src="app/js/ruleJS.all.full.js"></script>
    <script src="app/app.js"></script>
</head>

<body onload="_doOnLoad();">
    <div id="page-wrap" class="off-canvas-wrap" data-offcanvas>
        <section class="main-section">
            <div class="off-canvas-wrap" data-offcanvas>
                <div class="inner-wrap">
                    <?php include("app/views/top_menu.html"); ?>
                    
                    <?php include("app/views/left_menu.html"); ?>
                    <?php include("app/views/manual_controlo_interno.html"); ?>
                    <?php include("app/views/importar_diario.html"); ?>
                    <?php include("app/views/visualizar_diario.html"); ?>
                    <?php include("app/views/caderno_notas.html"); ?>
                    <?php // include("app/views/folha_trabalho.html"); ?>

                    <?php include("app/views/right_menu.html"); ?>
                    
                    <div id="procedimentos_auditoria_empresa" class="pagina">
                        <div class="row" style="height: 40em;">
                            <div class="large-12 columns" style="margin-top: 1em;">
                                <div id="treeboxbox_tree" style="background-color: #f5f5f5; border :1px solid Silver;"></div>
                            </div>
                        </div>
                    </div>
                    <div id="comparador_fiscal_contabil" class="pagina">
                        <!-- <iframe src="https://docs.google.com/spreadsheets/d/1Xuh5kCoru_hbjLBpuj2eH2WvniV3WQYGHhHpNxPuns4/edit#gid=0" style="height: 50em; width: 100%;"></iframe> -->
                        <!-- <iframe src="https://onedrive.live.com/embed?cid=5B70527D31C0214A&resid=5B70527D31C0214A%21164&authkey=AADrOLdhzVG310I" frameborder="0" scrolling="no" style="height: 50em; width: 100%;"></iframe> -->
                        <!-- <iframe src="https://onedrive.live.com/embed?cid=5B70527D31C0214A&resid=5B70527D31C0214A%21855&authkey=AGgs5jJXuj5UKUI&em=2" style="height: 50em; width: 100%;" frameborder="0" scrolling="no"></iframe> -->
                    </div>
                    <div id="visualizar_diarios" class="pagina">
                        <div class="row">
                            <div class="large-12 columns" style="margin-top: 1em;">
                                <div id="hst_diarios"></div>
                            </div>
                        </div>
                    </div>
                    <div id="visualizar_balancetes" class="pagina">
                        <div class="row">
                            <div class="large-12 columns" style="margin-top: 1em;">
                                <div id="hst_balancetes"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <?php include("app/views/footer.html"); ?>
        </section>
    </div>
    <script>
    $(document).foundation();
    </script>
</body>

</html>
