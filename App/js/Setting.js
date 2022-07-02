xui.Class('App.Setting', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"ctl_pane10")
                .setDock("fill")
                .setShowEffects({
                    "params" : {
                        "translateX" : [
                            "100%",
                            "0%"
                        ]
                    },
                    "type" : "circIn",
                    "duration" : 100
                })
                .setHideEffects({
                    "params" : {
                        "translateX" : [
                            "0%",
                            "100%"
                        ]
                    },
                    "type" : "circOut",
                    "duration" : 100
                })
                .setConDockPadding({
                    "left" : 32,
                    "right" : 32,
                    "bottom" : 0
                })
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.ECharts")
                .setHost(host,"xui_ui_echarts1")
                .setLeft("0.6em")
                .setTop("19.933333333333334em")
                .setWidth("30.733333333333334em")
                .setChartOption({
                    "title" : {
                        "text" : "Funnel",
                        "subtext" : "Fake Data"
                    },
                    "tooltip" : {
                        "trigger" : "item",
                        "formatter" : "{a} <br/>{b} : {c}%"
                    },
                    "toolbox" : {
                        "feature" : {
                            "dataView" : {
                                "readOnly" : false
                            },
                            "restore" : {
                            },
                            "saveAsImage" : {
                            }
                        }
                    },
                    "legend" : {
                        "data" : [
                            "Page View",
                            "Click",
                            "Visitor",
                            "Consulting",
                            "Order"
                        ]
                    },
                    "calculable" : true,
                    "series" : [
                        {
                            "name" : "Funnel",
                            "type" : "funnel",
                            "left" : "10%",
                            "top" : 60,
                            "bottom" : 60,
                            "width" : "80%",
                            "min" : 0,
                            "max" : 100,
                            "minSize" : "0%",
                            "maxSize" : "100%",
                            "sort" : "descending",
                            "gap" : 2,
                            "label" : {
                                "normal" : {
                                    "show" : true,
                                    "position" : "inside"
                                },
                                "emphasis" : {
                                    "textStyle" : {
                                        "fontSize" : 20
                                    }
                                }
                            },
                            "labelLine" : {
                                "normal" : {
                                    "length" : 10,
                                    "lineStyle" : {
                                        "width" : 1,
                                        "type" : "solid"
                                    }
                                }
                            },
                            "itemStyle" : {
                                "normal" : {
                                    "borderColor" : "#fff",
                                    "borderWidth" : 1
                                }
                            },
                            "data" : [
                                {
                                    "value" : 60,
                                    "name" : "Visitor"
                                },
                                {
                                    "value" : 40,
                                    "name" : "Consulting"
                                },
                                {
                                    "value" : 20,
                                    "name" : "Order"
                                },
                                {
                                    "value" : 80,
                                    "name" : "Click"
                                },
                                {
                                    "value" : 100,
                                    "name" : "Page view"
                                }
                            ]
                        }
                    ]
                })
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.Slider")
                .setHost(host,"xui_ui_slider1")
                .setDirtyMark(false)
                .setDock("width")
                .setLeft("0.625em")
                .setTop("1.875em")
                .setWidth("22em")
                .setHeight("2.5625em")
                .setIsRange(false)
                .setLabelSize("8em")
                .setLabelCaption("Font Size")
                .setLabelHAlign("left")
                .setValue("23")
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput548")
                .setDirtyMark(false)
                .setLeft("1.875em")
                .setTop("5.4375em")
                .setWidth("14.875em")
                .setLabelSize("8em")
                .setLabelCaption("Counter")
                .setLabelHAlign("left")
                .setType("counter")
                .setPrecision(0)
                .setValue(12)
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input17")
                .setDirtyMark(false)
                .setDock("width")
                .setLeft("2.3125em")
                .setTop("9.1875em")
                .setWidth("18em")
                .setHeight("10em")
                .setPlaceholder("Some text here")
                .setLabelSize("8em")
                .setLabelCaption("Memo")
                .setLabelHAlign("left")
                .setMultiLines(true)
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});