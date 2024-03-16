import photo from '../../assets/projects/encryptDecrypt.png'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function href(url) {
    window.open(url, "_blank");
}
function EncryptDerypt() {
    const desc = 'The Encrypt Decrypt is a simple web tool that allows users to encrypt and decrypt messages using AES encryption with a randomly generated key. It provides a user-friendly interface for secure message handling.';
    return (
        <div id='project-main'>

            <img src={photo} alt='' id='project-photo' />
            <div id='project-text'>
                <h1 className='title' id='project-title'>ENCRYPT DECRYPT</h1>
                <div id='tag-list' className='text'>
                    <p className='project-tag'>WEB DEVELOPMENT</p>
                    <p className='project-tag'>CRYPTO JS</p>
                </div>

                <p className='text' id='project-desc'>{desc.toUpperCase()}</p>

                <h1 className='title' id='project-features-title'>FEATURES</h1>
                <div id='features-links'>
                    <div id='features' className='text'>
                        <p>• ENCRYPT ANY MESSAGE WITH A RANDOMLY GENERATED KEY. <br />
                            • DECRYPT AN ENCRYPTED MESSAGE USING THE CORRECT KEY. <br />
                            • EASILY COPY ENCRYPTED ,DECRYPTED MESSAGES AND ENCRYPTION KEYS TO THE CLIPBOARD. <br />
                            • A CLEAN AND INTUITIVE INTERFACE FOR A SEAMLESS USER EXPERIENCE.
                        </p>
                    </div>
                    <div id='project-links'>
                        <FaExternalLinkAlt className='link' onClick={() => href('https://pcoder.me/EncryptDecrypt/')} />
                        <FaGithub className='link' onClick={() => href('https://github.com/Pratyush-Nirwan/EncryptDecrypt')} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EncryptDerypt;
