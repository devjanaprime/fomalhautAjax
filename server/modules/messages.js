let messages = [
    { 
        from: 'Abe Lincoln',
        message: 'Be excellent to eachother and party on dudes!'
    }
]; //end start messages 

let addMessage = ( newMessage ) =>{
    messages.push( newMessage );
}

let gimmeAllMessages = () =>{
    return messages;
} // end gimmeAllMessages

module.exports = {
    addMessage: addMessage,
    allMessages: gimmeAllMessages
};