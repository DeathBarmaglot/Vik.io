/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Text',
                type: 'text',
                rect: ['117px', '117px','174px','70px','auto', 'auto'],
                clip: ['rect(0px 174px 33.991214752197266px 0px)'],
                text: "А у вас <br>стоїть від ВІК? ",
                align: "right",
                font: ['Arial Black, Gadget, sans-serif', 20, "rgba(255,249,249,1.00)", "normal", "none", ""]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['45px', '87px','215px','24px','auto', 'auto'],
                text: "вул. Головна,  179<br>",
                align: "left",
                font: ['\'Arial Black\', Gadget, sans-serif', 20, "rgba(255,249,249,1.00)", "300", "none", "normal"]
            },
            {
                id: 'Text3Copy',
                type: 'text',
                rect: ['77px', '117px','215px','24px','auto', 'auto'],
                text: "050 434 09 04<br>067 477 01 00<br>",
                align: "left",
                font: ['\'Arial Black\', Gadget, sans-serif', 20, "rgba(255,249,249,1.00)", "300", "none", "normal"]
            },
            {
                id: '_1',
                type: 'image',
                rect: ['78px', '-5px','200px','194px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px'],
                transform: [[],['10']]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['39px', '18px','216px','38px','auto', 'auto'],
                text: "КОНДИЦІОНЕРИ",
                align: "left",
                font: ['\'Arial Black\', Gadget, sans-serif', 25, "rgba(255,225,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text2Copy2',
                type: 'text',
                rect: ['39px', '62px','216px','38px','auto', 'auto'],
                text: "РУШНИКОСУШКИ",
                align: "left",
                font: ['\'Arial Black\', Gadget, sans-serif', 25, "rgba(255,225,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text2Copy3',
                type: 'text',
                rect: ['39px', '106px','216px','38px','auto', 'auto'],
                text: "ОБІГРІВАЮЧІ<br>ПАНЕЛІ",
                align: "center",
                font: ['\'Arial Black\', Gadget, sans-serif', 25, "rgba(255,225,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'logo3',
                type: 'image',
                rect: ['-619px', '-307px','1535px','700px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logo3.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text3Copy}": [
                ["color", "color", 'rgba(255,249,249,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '77px'],
                ["style", "font-size", '20px'],
                ["style", "top", '117px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '24px'],
                ["style", "opacity", '0'],
                ["transform", "scaleX", '0']
            ],
            "${_Text3}": [
                ["color", "color", 'rgba(255,249,249,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '45px'],
                ["style", "font-size", '20px'],
                ["style", "top", '87px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '24px'],
                ["style", "font-weight", '300'],
                ["transform", "scaleX", '0']
            ],
            "${_Text2}": [
                ["style", "top", '18px'],
                ["style", "font-size", '25px'],
                ["color", "color", 'rgba(255,225,255,1.00)'],
                ["style", "height", '38px'],
                ["style", "opacity", '0'],
                ["style", "left", '-226px'],
                ["style", "width", '216px']
            ],
            "${_Text2Copy2}": [
                ["style", "top", '62px'],
                ["style", "width", '216px'],
                ["style", "height", '38px'],
                ["color", "color", 'rgba(255,225,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '-226px'],
                ["style", "font-size", '25px']
            ],
            "${__1}": [
                ["style", "top", '-5px'],
                ["transform", "rotateZ", '10deg'],
                ["style", "height", '194px'],
                ["style", "opacity", '0'],
                ["style", "left", '78px'],
                ["style", "width", '200px']
            ],
            "${_Text}": [
                ["color", "color", 'rgba(255,249,249,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '117px'],
                ["style", "font-size", '20px'],
                ["style", "top", '117px'],
                ["transform", "scaleX", '0'],
                ["transform", "scaleY", '0'],
                ["style", "width", '174px'],
                ["style", "height", '70px'],
                ["style", "font-family", 'Arial Black, Gadget, sans-serif'],
                ["style", "clip", [0,174,26.698577880859375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "text-align", 'right']
            ],
            "${_logo3}": [
                ["style", "top", '-307px'],
                ["style", "height", '700px'],
                ["style", "opacity", '0'],
                ["style", "left", '-619px'],
                ["style", "width", '1535px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(6,12,113,1.00)'],
                ["style", "width", '300px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text2Copy3}": [
                ["style", "line-height", '26px'],
                ["color", "color", 'rgba(255,225,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '-226px'],
                ["style", "font-size", '25px'],
                ["style", "top", '106px'],
                ["style", "text-align", 'center'],
                ["style", "height", '38px'],
                ["style", "width", '216px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10000,
            autoPlay: true,
            timeline: [
                { id: "eid65", tween: [ "style", "${_Text2Copy2}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 723 },
                { id: "eid66", tween: [ "style", "${_Text2Copy2}", "opacity", '0', { fromValue: '1'}], position: 6250, duration: 750 },
                { id: "eid21", tween: [ "style", "${_Text3Copy}", "opacity", '1', { fromValue: '0'}], position: 8120, duration: 630 },
                { id: "eid73", tween: [ "style", "${_Text3Copy}", "opacity", '0', { fromValue: '1'}], position: 9500, duration: 500 },
                { id: "eid14", tween: [ "transform", "${_Text3Copy}", "scaleY", '1', { fromValue: '0'}], position: 7870, duration: 630 },
                { id: "eid13", tween: [ "transform", "${_Text3Copy}", "scaleX", '1', { fromValue: '0'}], position: 7870, duration: 630 },
                { id: "eid42", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 2527, duration: 1105 },
                { id: "eid64", tween: [ "style", "${_Text2Copy2}", "left", '30px', { fromValue: '-226px'}], position: 4000, duration: 723 },
                { id: "eid63", tween: [ "style", "${_Text2}", "left", '39px', { fromValue: '-226px'}], position: 3027, duration: 723 },
                { id: "eid67", tween: [ "style", "${_Text2Copy3}", "left", '45px', { fromValue: '-226px'}], position: 5000, duration: 723 },
                { id: "eid78", tween: [ "style", "${_logo3}", "opacity", '1', { fromValue: '0'}], position: 7630, duration: 630 },
                { id: "eid79", tween: [ "style", "${_logo3}", "opacity", '0', { fromValue: '1'}], position: 9500, duration: 500 },
                { id: "eid11", tween: [ "transform", "${_Text3}", "scaleX", '1', { fromValue: '0'}], position: 6750, duration: 630 },
                { id: "eid3", tween: [ "transform", "${_Text}", "scaleX", '1', { fromValue: '0'}], position: 500, duration: 473 },
                { id: "eid4", tween: [ "transform", "${_Text}", "scaleY", '1', { fromValue: '0'}], position: 500, duration: 473 },
                { id: "eid22", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0'}], position: 7000, duration: 630 },
                { id: "eid76", tween: [ "style", "${_Text3}", "opacity", '0', { fromValue: '1'}], position: 9500, duration: 500 },
                { id: "eid68", tween: [ "style", "${_Text2Copy3}", "opacity", '1', { fromValue: '0'}], position: 5000, duration: 723 },
                { id: "eid69", tween: [ "style", "${_Text2Copy3}", "opacity", '0', { fromValue: '1'}], position: 6250, duration: 750 },
                { id: "eid34", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 3027, duration: 723 },
                { id: "eid44", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 6250, duration: 750 },
                { id: "eid29", tween: [ "style", "${__1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 750 },
                { id: "eid41", tween: [ "style", "${__1}", "opacity", '0', { fromValue: '1'}], position: 2527, duration: 1105 },
                { id: "eid12", tween: [ "transform", "${_Text3}", "scaleY", '1', { fromValue: '0'}], position: 6750, duration: 630 },
                { id: "eid25", tween: [ "style", "${_Text}", "clip", [0,174,64.65784454345703,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,174,26.698577880859375,0]}], position: 1500, duration: 1027 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-4910222");
