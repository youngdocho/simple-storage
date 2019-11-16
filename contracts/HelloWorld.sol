pragma solidity >=0.4.21 <0.6.0;

contract HelloWorld {
    string message = "hello world";
    
    function setMessage(string memory _msg) public {
        message = _msg;
    } 
    
    function getMessage() public view returns (string memory) {
        return message;
        
    } 
}