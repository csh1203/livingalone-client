import ReactQuill from "react-quill";

function AnswerPosting({ handleOnChnage }) {


    const modules = {
        toolbar: [
            [{ header: '1' }, { header: '2' }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['blockquote', 'code-block', 'link'],
        ],
    };


    return (
        <ReactQuill
            style={{ width: "100%", height: "600x", marginBottom: "42px", borderColor: "#CED0D6", borderRadius: "20px" }}
            modules={modules}
            onChange={handleOnChnage}
        />
    )
}

export default AnswerPosting