import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="bg-[#FBF7F0]">
            <head>
                <link
                    href="https://fonts.cdnfonts.com/css/helvetica-neue-55"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.cdnfonts.com/css/magilio"
                    rel="stylesheet"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
