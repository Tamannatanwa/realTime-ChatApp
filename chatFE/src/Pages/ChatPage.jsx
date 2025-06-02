import { Box, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from "axios"

const ChatPage = () => {
    const [chats, setChats] = useState([])
    const fetchChats = async () => {
        try {
            const data = await axios.get("/api/chat");
            setChats(data.data)
        }
        catch (err) {
            
            console.error("Error fetching chats:", err);

        }
    }


    useEffect(() => {
        fetchChats()
    }, [])

    return (
        <Container maxWidth="lg">
            {
                chats?.map((chat, index) =>
                    <Box key={chat._id}>
                        {
                            chat.chatName
                        }
                    </Box>
                )
            }
        </Container>
    )
}

export default ChatPage
