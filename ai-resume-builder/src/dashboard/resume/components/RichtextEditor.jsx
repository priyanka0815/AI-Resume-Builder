import React, { useContext, useState } from "react";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { Button } from "@/components/ui/Button";
import { Brain, LoaderCircle } from "lucide-react";
import { AIChatSession } from "../../../../service/AIModal";
import { toast } from "sonner";
import {
    BtnBold,
    BtnBulletList,
    BtnItalic,
    BtnLink,
    BtnNumberedList,
    BtnStrikeThrough,
    BtnUnderline,
    Editor,
    EditorProvider,
    Separator,
    Toolbar,
} from "react-simple-wysiwyg";

// const PROMPT =
//     "position titile: {positionTitle} , Depends on position title give me 5-7 bullet points for my experience in resume (Please do not add experince level and No JSON array) , give me result in HTML tags";
const PROMPT =
    "Provide me 5-7 points and it is must to provide result in HTML using ul and li tags for my experience in resume for the position titile: {positionTitle}";

function RichTextEditor({ onRichTextEditorChange, index, defaultValue }) {
    const [value, setValue] = useState(defaultValue);
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [loading, setLoading] = useState(false);
    const GenerateSummeryFromAI = async () => {
        if (!resumeInfo?.Experience[index]?.title) {
            toast("Please Add Position Title");
            return;
        }
        setLoading(true);
        const prompt = PROMPT.replace(
            "{positionTitle}",
            resumeInfo.Experience[index].title
        );

        const result = await AIChatSession.sendMessage(prompt);
        const resp = result.response.text();
        // .match(/\[(.*)\]/)[1]
        // .replace("[", "")
        // .replace("]", "")
        // .replaceAll(/(['"])\,\s*\1/g, "");

        console.log(resp);

        // setValue(resp.substring(1, resp.length - 1));
        setValue(resp.replace("[", "").replace("]", ""));
        setLoading(false);
    };

    return (
        <div>
            <div className="flex justify-between my-2">
                <label className="text-xs">Summery</label>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={GenerateSummeryFromAI}
                    disabled={loading}
                    className="flex gap-2 border-primary text-primary"
                >
                    {loading ? (
                        <LoaderCircle className="animate-spin" />
                    ) : (
                        <>
                            <Brain className="h-4 w-4" /> Generate from AI
                        </>
                    )}
                </Button>
            </div>
            <EditorProvider>
                <Editor
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                        onRichTextEditorChange(e);
                    }}
                >
                    <Toolbar>
                        <BtnBold />
                        <BtnItalic />
                        <BtnUnderline />
                        <BtnStrikeThrough />
                        <Separator />
                        <BtnNumberedList />
                        <BtnBulletList />
                        <Separator />
                        <BtnLink />
                    </Toolbar>
                </Editor>
            </EditorProvider>
        </div>
    );
}

export default RichTextEditor;
