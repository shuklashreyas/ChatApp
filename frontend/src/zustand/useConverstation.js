import {create} from 'zustand';

const useConversation = create((set) => ({
    slecetedConversation: null,
    setSelectedConversation: (conversation) => set({selectedConversation: conversation}),
    messages: [],
    setMessages: (messages) => set({messages}),

}));

export default useConversation;
