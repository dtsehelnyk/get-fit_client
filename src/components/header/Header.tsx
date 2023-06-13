interface HeaderProps {
    title: React.ReactNode | React.ReactElement | String,
    content: React.ReactNode | React.ReactElement | String,
}

const Header: React.FC<HeaderProps> = ({ title, content }) => {

    return (
        <div>
            <h1>{title}</h1>
            <h1>{content}</h1>
        </div>
    );
}

export default Header;
