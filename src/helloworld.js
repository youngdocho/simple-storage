import { default as Web3 } from 'web3';

const URL = "http://127.0.0.1:7545";
const CONTRACT_ADDRESS = "0x58B059498B87E9dFA1ceD29a5f9BCf5002E147e9";
const MY_ACCOUNT = "0x38baee27A0f8BBFEDF6C557EEe990befcc8b0268";

const web3 = new Web3(URL);

const HELLO_WORLD_ABI = [{
        "constant": false,
        "inputs": [{
            "name": "_msg",
            "type": "string"
        }],
        "name": "setMessage",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getMessage",
        "outputs": [{
            "name": "",
            "type": "string"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]

var contractInstance = new web3.eth.Contract(HELLO_WORLD_ABI, CONTRACT_ADDRESS);

function setMessage(message) {
    var setMessageCall = contractInstance.methods.setMessage(message)
        .send({ from: MY_ACCOUNT }, (error, txHash) => {
            if (!error) {
                console.log(txHash);
            } else {
                console.error;
            }

        });
}

function getMessage() {
    var getMessageCall = contractInstance.methods.getMessage()
        .call({ from: MY_ACCOUNT }, (error, result) => {
            if (!error) {
                console.log(result);
            } else {
                console.error;
            }
        });
    return getMessageCall;
}

export { setMessage, getMessage };