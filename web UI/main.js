
var testObj = [
{project: "test Project 1" , sync: "test sync 1"},
{project: "test Project 2" , sync: "test sync 2"},
{project: "test Project 3" , sync: "test sync 3"}
];
const ReadList = ()=>// Read the List
{ 
    var list = GetList();
    let ListHtml =`<table cellpadding = "${10}"> <tr> <th style="color:orange">Active Project</th> <th style="color:orange">Last Sync</th> </tr>`;
    let TagSpacing = "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"
    list.forEach(obj=>{
        ListHtml += `<tr> 
                        <td> <h5>${obj["project"]}</h5> </td>
                        <td> ${obj["sync"]} </td>   
                        <td> <button class="syncButton">button 1 </button>
                        <td> <button class="syncButton">button 2 </button>
                        <td> <button class="syncButton">button 3 </button>
                    </tr>`;
    })
    ListHtml += "</table>";
    $("#DisplayList").html(ListHtml);
}

const GetList = ()=> // Get and Return the list
{
    return testObj;
}