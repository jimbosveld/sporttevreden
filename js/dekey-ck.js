function getCorposDekey(){$.getJSON("http://onderzoek.thebrighthouse.nl/woontevreden/api/corporatie/woonstichting_de_key/data.json/recent?callback=?",function(e){var t="";$.each(e,function(){var e="";this.review!==null?e+='<tr><td rowspan="5">'+this.timestamp.replace(/..:..:../,"")+"<br>"+this.review+"</td>":e+='<tr><td rowspan="5">'+this.timestamp.replace(/..:..:../,"")+"<br>"+"<i>geen review gegeven</i></td>";e+='<td class="woonSituatie"valign="middle" style="text-align:center;" rowspan = "5">'+this.cijfer_woonsituatie+"</td></tr>";e+="<tr><td>"+this.cijfer_woningcorporatie+"</td><td>Corporatie</td></tr>";e+="<tr><td>"+this.cijfer_woning+"</td><td>Woning</td></tr>";e+="<tr><td>"+this.cijfer_woonomgeving+"</td><td>Woonomgeving</td></tr>";t+="<tr>"+e+"</tr>"});$("#corporatieTableBody").html(t)})}getCorposDekey();