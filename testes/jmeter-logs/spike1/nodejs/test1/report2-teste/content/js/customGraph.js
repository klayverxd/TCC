/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/


    
$(document).ready(function() {
    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });
    
        try{
        refreshcustom_mm_hit(true);
    } catch(e){
        console.log(e);
    }    
    $(".portlet-header").css("cursor", "auto");
});

var responsecustom_mm_hitInfos = {
    data: {"result": {"minY": 11.736196319018422, "minX": 1.696199552E12, "maxY": 277.521868050408, "series": [{"data": [[1.696199564E12, 11.877264957264966], [1.69619965E12, 16.027379949452378], [1.696199652E12, 15.297741273100625], [1.696199568E12, 12.891793754538828], [1.696199566E12, 11.736196319018422], [1.69619957E12, 11.742067553735945], [1.696199654E12, 15.75585284280937], [1.696199656E12, 16.162840136054434], [1.696199572E12, 17.618803418803413], [1.696199658E12, 17.793761638733706], [1.696199554E12, 15.73869346733668], [1.696199638E12, 31.397248853689078], [1.69619964E12, 31.720303285593964], [1.696199556E12, 12.212057483350838], [1.696199642E12, 24.1826963460731], [1.696199644E12, 15.721153846153841], [1.69619956E12, 12.074202496532585], [1.696199558E12, 12.366607460035537], [1.696199562E12, 11.901684427638356], [1.696199646E12, 16.26916524701873], [1.696199648E12, 16.140421713772973], [1.696199586E12, 23.222480620155032], [1.696199588E12, 27.4816137093895], [1.696199592E12, 166.68749999999972], [1.69619959E12, 23.151689189189174], [1.696199594E12, 215.68747901980515], [1.69619966E12, 16.141465480728506], [1.696199576E12, 23.275756545392706], [1.696199574E12, 24.09342560553634], [1.696199578E12, 23.55022283167636], [1.696199662E12, 15.48028962188254], [1.69619958E12, 23.752545824847264], [1.696199584E12, 24.48659626320063], [1.696199582E12, 23.40177051413011], [1.696199606E12, 277.521868050408], [1.696199608E12, 231.74443043295474], [1.69619961E12, 264.38954248366014], [1.696199612E12, 254.1770106500187], [1.696199614E12, 220.52431561996815], [1.696199616E12, 273.12796208530705], [1.696199596E12, 256.18337495540527], [1.6961996E12, 254.20071918927735], [1.696199598E12, 213.52414045354766], [1.696199602E12, 250.00036927621903], [1.696199604E12, 225.08134280180818], [1.696199628E12, 30.955236139630415], [1.69619963E12, 31.09214876033049], [1.696199632E12, 30.961076604554858], [1.696199634E12, 32.15010570824524], [1.696199636E12, 31.25580431177446], [1.696199552E12, 13.58615263571992], [1.696199618E12, 206.2869116698904], [1.69619962E12, 273.47638227755436], [1.696199622E12, 203.32286340394458], [1.696199624E12, 32.01490630323666], [1.696199626E12, 30.881460213289593]], "isOverall": false, "label": "Latency", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 2000, "maxX": 1.696199662E12, "title": "Graph Title", "X_Axis": "Over Time", "sample_Metric_Name": "Latency", "Y_Axis": "Response Time (ms)", "content_Message": "Message for graph point label"}},
    getOptions: function(){
        return {
            series: {
                lines: {
                    show: true
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                mode: "time",
                timeformat: getTimeFormat(this.data.result.granularity),
                axisLabel: 'Over Time',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: 'Response Time (ms)',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponsecustom_mm_hit'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to
                                // work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : at %x Message for graph point label %y"
            }
        };
    },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponsecustom_mm_hit"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponsecustom_mm_hit"), dataset, options);
        // setup overview
        $.plot($("#overviewResponsecustom_mm_hit"), dataset, prepareOverviewOptions(options));
    }
};

// Response Custom Graph
function refreshcustom_mm_hit(fixTimestamps) {
    var infos = responsecustom_mm_hitInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponsecustom_mm_hit"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponsecustom_mm_hit");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponsecustom_mm_hit", "#overviewResponsecustom_mm_hit");
        $('#footerResponsecustom_mm_hit .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    }else{
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
    
    if(elem.id == "bodyResponsecustom_mm_hit"){
        if (isGraph($(elem).find('.flot-chart-content')) == false) {
            refreshcustom_mm_hit(true);
        }
            document.location.href="#custom_mm_hit";
        }
    }
}

function toggleAll(id, checked){
    var placeholder = document.getElementById(id);
    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);
    var choiceContainer;
    
    if(id == "choicesResponsecustom_mm_hit"){
        choiceContainer = $("#choicesResponsecustom_mm_hit");
        refreshcustom_mm_hit(false);
    }
}