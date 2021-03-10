const messages = []
id = 0

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body
        let message = {
            id,
            text,
            time
        }
        messages.push(message)
        id++
        res.status(200).send(messages)
    },

    read: (req, res) => {
        res.status(200).send(messages)
    },

    update: (req, res) => {
        const { text } = req.body;
        const updateID = req.params.id;
        const messageIndex = messages.findIndex(message => message.id == updateID);
        let message = messages[messageIndex];
      
        messages[messageIndex] = {
          id: message.id,
          text: text || message.text,
          time: message.time
        };
      
        res.status(200).send(messages);
      }
      
    // update: (req, res) => {
    //     let index = null
    //     const {text} = req.body
    //     messages.forEach((message, i) => {
    //         if (message.id === +req.params.id)
    //         index = i 
    //     }) 
    //     messages[index] = {
    //         id: messages[index].id,
    //         text: text || messages[index].text,
    //         time: messages[index].time
    //     }
    //     res.status(200).send(messages)
    // }
    ,

    delete: (req, res) => {
        let index = null
        messages.forEach((message, i) => {
            if (message.id === +req.params.id) {
                index = i
            }
        })
        messages.splice(index, 1)
        res.status(200).send(messages)
    },
}