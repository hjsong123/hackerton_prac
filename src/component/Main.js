import { useEffect, useState } from 'react';
import MainHeader from './MainHeader';
import MainLeft from './MainLeft';

function Main() {
    /*여기서 api 정보 받아온 후, 진행 */
    // 로그인되어있는지 확인 후, 리다이렉트 시킬 수 있도록.
    
  return (
    <div className="main">
      <MainLeft />
      <div className="main-right">
        <MainHeader />
        <div className="main-right-middle">
          <div className="main-right-mywork">
            <h2>Welcome to the Dashboard</h2>
            <ul className="main-right-mywork-list">
                {/* 여기는 동적으로 map 함수통해서 작업 목록을 출력해야 합니다. */}
                <li className="main-right-mywork-item">My Work 1</li>
                <li className="main-right-mywork-item">My Work 2</li>
                <li className="main-right-mywork-item">My Work 3</li>
                <li className="main-right-mywork-item">My Work 4</li>
            </ul>
            </div>
            <div className="main-right-progress">
                <h2>Progress Overview</h2>
                <div className="main-right-progress-chart">
                    {/* 여기는 차트나 그래프를 넣을 수 있는 공간입니다. */}
                    <p>Chart will be displayed here.</p>
                </div>
            </div>
        </div>
        <div className="main-right-footer">
          <h2>예정된 팀플 모임</h2>
        </div>
      </div>
    </div>
  );
}

export default Main;