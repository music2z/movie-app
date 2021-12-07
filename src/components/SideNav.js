import React, {Component} from "react";

class SideNav extends Component {
    render() {
        return (

    <aside>
        <nav className="sidenav">
            <ul className="sidenav-list">
                <li>
                    <Button2 />
                    <Ullist />
                </li>
            </ul>
        </nav>
    </aside>

        );
    }
}

const Button2 = () => {
    return (
    <button type="button" className="btn-sidenav-dropdown active" title="실적 분석 타이틀이 길게 나올 경우 title을 써줍니다.">
        <object data="" className="icon-svg">111</object>
        <span className="txt">실적 분석 타이틀이 길게 나올 경우 title을 써줍니다.</span>
    </button>
    )
}

const Ullist = () => {
    return (
    <ul className="sidenav-2depth-list show">
        <li className="on">
            <a className="link" href="#none">카테고리별 실적 분석카테고리별 실적 분석</a>
        </li>
        <li><a className="link" href="#none">경쟁사 순위 분석</a></li>
    </ul>
    )
}

export default SideNav
