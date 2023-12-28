const messageService = require('../services/messageService')

const getMessage = async (req, res) => {
    try {
        const { conversationId } = req.body;
        const messages = await messageService.getMessage(conversationId);
        if (messages) {
            return res.status(200).json({ result: true, message: 'getMessage Succesful', messages: messages })
        }
        return res.status(400).json({ result: false, message: 'getMessage null' })

    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error getMessage' })
    }
}

const addMessage = async (req, res) => {
    try {
        const messageData = req.body;
        const messages = await messageService.addMessage(messageData);
        if (messages) {
            return res.status(200).json({ result: true, message: 'addMessage Succesful' })
        }
        return res.status(400).json({ result: false, message: 'addMessage null' })

    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error addMessage' })
    }
}

module.exports = {
    addMessage, getMessage
}