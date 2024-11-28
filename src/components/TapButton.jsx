export default function TapButton({ children, onSelect }) {
    return (
        <li>
            {/*
                It doesn't work function that has parenthesis at right end of handleClick
                This is because in above case the function executed immediately and returns a value.
            */}
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}