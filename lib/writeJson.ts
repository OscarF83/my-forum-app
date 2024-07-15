import { MessageStructure } from "@/components/Message";
import { writeFile } from "fs/promises";


export async function writeJson(messagesList: MessageStructure[]){
    try{
await writeFile("datos.json", JSON.stringify(messagesList));
    } catch {
        console.log("Error: JSON file not found!");
    }
}