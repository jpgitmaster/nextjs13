
import { useState, useEffect } from 'react';
import APIcalls from './../../api';
import styles from './../../styles/Front.module.scss';

interface PropsDefinition {
    error: any;
    handleLinkID(data: any): void;
}
  
const Dropdown = (props: PropsDefinition) => {
    const { links, getDropwdownLinks } = APIcalls();
    const { links_arr } = links;
    const [isUpdate, setUpdate] = useState(false);

    useEffect(() => {
        getDropwdownLinks();
        return () => {
            setUpdate(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isUpdate]);

    const [showLinks, setShowLinks] = useState(false);
    const [currentValue, setCurrentValue] = useState({
        id: '',
        name: ''
    });
    const getParent = () => {
        setShowLinks(!showLinks);
    }
    const getValue = (val: any) => {
        setCurrentValue(val);
        props.handleLinkID(val);
        setShowLinks(false);
    }
    const clearVal = () => {
        setCurrentValue({id: '', name: ''});
        props.handleLinkID({id: '', name: ''});
    }
    return (
      <div className={styles.linkDropdown + (props.error.linkId ? ' '+styles.err : '')}>
        <label className={styles.linkLabel}>Link: <span>*</span></label>
        {
            currentValue.name && <span className={styles.clearLink} onClick={clearVal}>CLEAR</span>
        }
        <div className={styles.dropdownInput} onClick={getParent}>
            {currentValue.name}
        </div>
        {
            showLinks &&
            <div className={styles.linkNavs}>
                <ul className={styles.linkMenu}>
                {
                    links_arr.map((link: any) => 
                    <li key={link.id}>
                        {
                            <div className={
                                `${styles.linkWrapper}`
                                +(currentValue.id === link.id ? ' '+styles.active : '')
                                +(link.page ? ' '+styles.disabled : '')} onClick={() => getValue(link)}>
                                {link.name}
                            </div>
                        }
                        {
                            link.sublinks ?
                            <ul className={styles.linkSubmenu}>
                                {
                                    link.sublinks.map((sublink: any) =>
                                    <li key={sublink.id}>
                                        <div className={`
                                            ${styles.linkWrapper}`
                                            +(currentValue.id === sublink.id ? ' '+styles.active : '')
                                            +(sublink.page ? ' '+styles.disabled : '')} onClick={() => getValue(sublink)}>
                                            {sublink.name}
                                        </div>
                                    </li>)
                                }
                            </ul>
                            : ''
                        }
                    </li>)
                }
                </ul>
            </div>
        }
        
      </div>
  )
}
 
export default Dropdown;