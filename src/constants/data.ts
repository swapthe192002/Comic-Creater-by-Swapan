import { BubbleType } from "@/lib/interfaces"

export const comicSteps = [
    "Click the 'Add a comic' button to start creating your comic.",
    "Provide a prompt to generate an image that will form the basis of your comic.",
    "Enter the text for your speech bubbles to add dialogues and captions to your comic.",
    "Select the type of speech bubble you want from the available options.",
    "Drag and position the speech bubbles around your comic card as you like.",
    "Fine-tune the placement to create the perfect composition for your comic.",
    "Enjoy using the comic creator app."
  ];
  

export const bubbleType: BubbleType[] = [
    {
      id: 0,
      val: "Speech bubble pointing left",
      type: "left",
    },
    {
      id: 1,
      val: "Speech bubble pointing right",
      type: "right",
    },
    {
      id: 2,
      val: "Thinking bubble pointing left",
      type: "thinkLeft",
    },
    {
      id: 3,
      val: "Thinking bubble pointing right",
      type: "thinkRight",
    },
  ];
  