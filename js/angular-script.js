// Application module
var crudApp = angular.module('crudApp',[]);

var dataA = [];
var idCounter = 1;

crudApp.controller("DbController",['$scope','$http', function($scope,$http){

// Function to get details from the data store.
getInfo();
function getInfo(){
    
//    console.log(dataA);
    $scope.details = dataA;
}

$scope.todoInfo = {'done' : 'no'};
// Enabling show_form variable to enable Add button
$scope.show_form = true;
// Function to add toggle behaviour to form
$scope.formToggle =function(){
    $('#todoForm').slideToggle();
    $('input').val('');
}
$scope.insertInfo = function(info){
    
    var myInfo = [];
    info.id = idCounter++;
    myInfo.id = info.id;
    myInfo.name = info.name;
    myInfo.email = info.email;
    myInfo.description = info.description;
    myInfo.done = info.done;
    
    dataA.push(myInfo);
    getInfo();
    $('#todoForm').css('display', 'none');
    
    $('#selectAllCheckbox').prop('checked', false);
}
function deleteInfo(id){
    for(var j = 0;j<dataA.length;j++){
        if(dataA[j].id == id){
            dataA.splice(j, 1);
        }
    }
    getInfo();
}

$scope.deleteMultiple = function(detailsA){
    var checked = false;
    $('input:checked').each(function(i, v){
        checked = true;
        deleteInfo($(v).attr('id'));
    });
    
    if(!checked){
        alert('Please select an item to delete.');
    }
    
    $('#selectAllCheckbox').prop('checked', false);
}

$scope.selectItem = function(checkboxId){
    if(!$('#'+checkboxId).prop('checked')){
        $('#selectAllCheckbox').prop('checked', false);
    }
}

$scope.selectAll = function(){
    console.log($('#selectAllCheckbox').prop('checked'));
    $(':checkbox').prop('checked', $('#selectAllCheckbox').prop('checked'));
}

$scope.currentUser = {};

}]);