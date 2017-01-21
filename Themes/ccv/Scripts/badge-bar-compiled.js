!function(){var a=Handlebars.template,t=Handlebars.templates=Handlebars.templates||{};t["badge-bar"]=a({1:function(a,t,n,e,i){var l;return'  <div class="badge badge-baptism badge-icon" data-toggle="tooltip" title="Baptized on '+a.escapeExpression((n.dateFormat||t&&t.dateFormat||n.helperMissing).call(null!=t?t:{},null!=(l=null!=t?t.BaptismResult:t)?l.BaptismDate:l,{name:"dateFormat",hash:{format:"l"},data:i}))+'" data-container="body">\r\n    <i class="icon ccv-baptism"></i>\r\n  </div>\r\n'},3:function(a,t,n,e,i){var l;return'  <div class="badge badge-baptism badge-icon step-partial" data-toggle="tooltip" title="Registered for baptism on '+a.escapeExpression((n.dateFormat||t&&t.dateFormat||n.helperMissing).call(null!=t?t:{},null!=(l=null!=t?t.BaptismResult:t)?l.BaptismRegistrationDate:l,{name:"dateFormat",hash:{format:"l"},data:i}))+'" data-container="body">\r\n    <i class="icon ccv-baptism"></i>\r\n  </div>\r\n'},5:function(a,t,n,e,i){return'  <div class="badge badge-baptism badge-icon step-nottaken" data-toggle="tooltip" title="Is not baptized" data-container="body">\r\n    <i class="icon ccv-baptism"></i>\r\n  </div>\r\n'},7:function(a,t,n,e,i){return'  <div class="badge badge-worship badge-icon" data-toggle="tooltip" title="Is an eRA" data-container="body">\r\n    <i class="icon ccv-worship"></i>\r\n  </div>\r\n'},9:function(a,t,n,e,i){return'  <div class="badge badge-worship badge-icon step-nottaken" data-toggle="tooltip" title="Is not an eRA" data-container="body">\r\n    <i class="icon ccv-worship"></i>\r\n  </div>\r\n'},11:function(a,t,n,e,i){var l;return'  <div class="badge badge-connect badge-icon" data-toggle="tooltip" title="Is in a connection group (eariest active group '+a.escapeExpression((n.dateFormat||t&&t.dateFormat||n.helperMissing).call(null!=t?t:{},null!=(l=null!=t?t.ConnectionResult:t)?l.ConnectedSince:l,{name:"dateFormat",hash:{format:"l"},data:i}))+')" data-container="body">\r\n    <i class="icon ccv-connect"></i>\r\n  </div>\r\n'},13:function(a,t,n,e,i){var l;return'  <div class="badge badge-connect badge-icon step-partial" data-toggle="tooltip" title="Is pending in a connection group (eariest active group '+a.escapeExpression((n.dateFormat||t&&t.dateFormat||n.helperMissing).call(null!=t?t:{},null!=(l=null!=t?t.ConnectionResult:t)?l.ConnectedSince:l,{name:"dateFormat",hash:{format:"l"},data:i}))+')" data-container="body">\r\n    <i class="icon ccv-connect"></i>\r\n  </div>\r\n'},15:function(a,t,n,e,i){return'  <div class="badge badge-connect badge-icon step-nottaken" data-toggle="tooltip" title="Is not connected to a neighborhood group" data-container="body">\r\n    <i class="icon ccv-connect"></i>\r\n  </div>\r\n'},17:function(a,t,n,e,i){return'    <div class="badge badge-serve badge-icon step-nottaken" data-toggle="tooltip" title="Is not serving" data-container="body">\r\n    <i class="icon ccv-serve"></i>\r\n  </div>\r\n'},19:function(a,t,n,e,i){var l;return'    <div class="badge badge-serve badge-icon step-partial" data-toggle="tooltip" title="Is pending serving (earliest active group '+a.escapeExpression((n.dateFormat||t&&t.dateFormat||n.helperMissing).call(null!=t?t:{},null!=(l=null!=t?t.ServingResult:t)?l.ServingSince:l,{name:"dateFormat",hash:{format:"l"},data:i}))+')" data-container="body">\r\n    <i class="icon ccv-serve"></i>\r\n    </div>\r\n'},21:function(a,t,n,e,i){var l;return'    <div class="badge badge-serve badge-icon" data-toggle="tooltip" title="Is serving (earliest active group '+a.escapeExpression((n.dateFormat||t&&t.dateFormat||n.helperMissing).call(null!=t?t:{},null!=(l=null!=t?t.ServingResult:t)?l.ServingSince:l,{name:"dateFormat",hash:{format:"l"},data:i}))+')" data-container="body">\r\n    <i class="icon ccv-serve"></i>\r\n    </div>\r\n'},23:function(a,t,n,e,i){return'  <div class="badge badge-tithe badge-icon" data-toggle="tooltip" data-original-title="Is giving" data-container="body">\r\n    <i class="icon ccv-tithe"></i>\r\n  </div>\r\n'},25:function(a,t,n,e,i){return'  <div class="badge badge-tithe badge-icon step-nottaken" data-toggle="tooltip" data-original-title="Is not giving" data-container="body">\r\n    <i class="icon ccv-tithe"></i>\r\n  </div>\r\n'},27:function(a,t,n,e,i){var l;return'  <div class="badge badge-coach badge-icon" data-toggle="tooltip" title="Is in a coaching group (earliest active group '+a.escapeExpression((n.dateFormat||t&&t.dateFormat||n.helperMissing).call(null!=t?t:{},null!=(l=null!=t?t.CoachingResult:t)?l.CoachingSince:l,{name:"dateFormat",hash:{format:"l"},data:i}))+')" data-container="body">\r\n    <i class="icon ccv-coach"></i>\r\n  </div>\r\n'},29:function(a,t,n,e,i){return'  <div class="badge badge-coach badge-icon step-nottaken" data-toggle="tooltip" title="Is not coaching" data-container="body">\r\n    <i class="icon ccv-coach"></i>\r\n  </div>\r\n'},compiler:[7,">= 4.0.0"],main:function(a,t,n,e,i){var l,o=null!=t?t:{},s=n.helperMissing;return'\r\n<div class="badge-group badge-group-steps js-badge-group-steps badge-id-27">\r\n\r\n'+(null!=(l=(n.ifStatus||t&&t.ifStatus||s).call(o,null!=(l=null!=t?t.BaptismResult:t)?l.BaptismStatus:l,{name:"ifStatus",hash:{is:1},fn:a.program(1,i,0),inverse:a.noop,data:i}))?l:"")+(null!=(l=(n.ifStatus||t&&t.ifStatus||s).call(o,null!=(l=null!=t?t.BaptismResult:t)?l.BaptismStatus:l,{name:"ifStatus",hash:{is:2},fn:a.program(3,i,0),inverse:a.noop,data:i}))?l:"")+(null!=(l=(n.ifStatus||t&&t.ifStatus||s).call(o,null!=(l=null!=t?t.BaptismResult:t)?l.BaptismStatus:l,{name:"ifStatus",hash:{is:0},fn:a.program(5,i,0),inverse:a.noop,data:i}))?l:"")+"\r\n"+(null!=(l=n.if.call(o,null!=t?t.IsWorshipper:t,{name:"if",hash:{},fn:a.program(7,i,0),inverse:a.program(9,i,0),data:i}))?l:"")+"\r\n"+(null!=(l=(n.ifStatus||t&&t.ifStatus||s).call(o,null!=(l=null!=t?t.ConnectionResult:t)?l.ConnectionStatus:l,{name:"ifStatus",hash:{is:0},fn:a.program(11,i,0),inverse:a.noop,data:i}))?l:"")+(null!=(l=(n.ifStatus||t&&t.ifStatus||s).call(o,null!=(l=null!=t?t.ConnectionResult:t)?l.ConnectionStatus:l,{name:"ifStatus",hash:{is:2},fn:a.program(13,i,0),inverse:a.noop,data:i}))?l:"")+(null!=(l=(n.ifStatus||t&&t.ifStatus||s).call(o,null!=(l=null!=t?t.ConnectionResult:t)?l.ConnectionStatus:l,{name:"ifStatus",hash:{is:1},fn:a.program(15,i,0),inverse:a.noop,data:i}))?l:"")+"\r\n"+(null!=(l=(n.ifStatus||t&&t.ifStatus||s).call(o,null!=(l=null!=t?t.ServingResult:t)?l.ServingStatus:l,{name:"ifStatus",hash:{is:0},fn:a.program(17,i,0),inverse:a.noop,data:i}))?l:"")+(null!=(l=(n.ifStatus||t&&t.ifStatus||s).call(o,null!=(l=null!=t?t.ServingResult:t)?l.ServingStatus:l,{name:"ifStatus",hash:{is:1},fn:a.program(19,i,0),inverse:a.noop,data:i}))?l:"")+(null!=(l=(n.ifStatus||t&&t.ifStatus||s).call(o,null!=(l=null!=t?t.ServingResult:t)?l.ServingStatus:l,{name:"ifStatus",hash:{is:2},fn:a.program(21,i,0),inverse:a.noop,data:i}))?l:"")+"\r\n"+(null!=(l=n.if.call(o,null!=t?t.IsTithing:t,{name:"if",hash:{},fn:a.program(23,i,0),inverse:a.program(25,i,0),data:i}))?l:"")+"\r\n"+(null!=(l=n.if.call(o,null!=(l=null!=t?t.CoachingResult:t)?l.IsCoaching:l,{name:"if",hash:{},fn:a.program(27,i,0),inverse:a.program(29,i,0),data:i}))?l:"")+"\r\n</div>\r\n"},useData:!0})}();