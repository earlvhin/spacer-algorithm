import "@/styles/globals.css";

export default function ContentCard(props) {
    const { contentId } = props;

    return (
        <div>
            <h4>{contentId}</h4>
        </div>
    );
}
