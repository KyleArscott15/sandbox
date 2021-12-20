var execSync = require('child_process').execSync;
var exec = require('child_process').exec;
const util = require('util');

function executeShellCommand (cmd) 
{
    //console.log("Execute Shell Command!");

    let shellCommandResponse = "";

    try
    {
        //var execSync = require('child_process').execSync;
        shellCommandResponse = exec(cmd).toString();
    }
    catch(error)
    {
        shellCommandResponse = "Error: " + error;
    }
    
    //console.log("Execute Shell Command Respose: " + shellCommandResponse);
    return shellCommandResponse;
}

async function testExecSyncProvesThereIsOneShellInThisProcess()
{
    // Note: this "cd" in "commandBlock" proves that the second command for "pwd" is run in a seperate shell
    // because the output of "pwd" is "testExecSync output [/home/kyle/src/test]"", which is NOT "/home/kyle"
    // therefore it runs in a new shell
    var commandBlock = "cd /home/kyle && echo \"Block for 5s\": && sleep 5";

    var block = await execShellInSeperateThread(commandBlock);
    var output = await execShellInSeperateThread("pwd");

    console.log("testExecSync output [" + output + "]");
}

async function testExecSync()
{
    console.log("testExecSync");

    var commandBlock = "cd /home/kyle && echo \"Block for 5s\": && sleep 5";

    var block = nonBlockExecShellCommand(commandBlock);
    var output = nonBlockExecShellCommand("pwd");

    console.log("testExecSync output [" + JSON.stringify(output) + "]");
}

function execShellInSeperateThread(cmd)
{
    setTimeout(function() { executeShellCommand(cmd); }, 0);
}

function nonBlockExecShellCommand_(cmd)
{
    let shellCommandResponse = "KA";

    try
    {
        shellCommandResponse = execSync(cmd).toString();
    }
    catch(error)
    {
        shellCommandResponse = "Error: " + error;
    }
    
    console.log("Execute Shell Command cmd: " + cmd + " response: " + shellCommandResponse);
    return shellCommandResponse;
}

// Here is what's happening: the execSync is blocking the node server:
// -wait: if it's blocking, then why is the second command being processed at all? I would have thought it would
//        not buffer in the shell, because it would not get that far, but it is?

testExecSyncProvesThereIsOneShellInThisProcess();
//testExecSync();

module.exports = {
    executeShellCommand
}