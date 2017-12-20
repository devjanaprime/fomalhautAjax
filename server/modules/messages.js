let messages = [
    { 
        from: 'Abe Lincoln',
        message: 'Be excellent to eachother and party on dudes!'
    }
]; //end start messages 

let gimmeAllMessages = () =>{
    return messages;
} // end gimmeAllMessages

module.exports = {
    allMessages: gimmeAllMessages
};