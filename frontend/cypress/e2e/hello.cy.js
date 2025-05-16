describe('기본 접속 테스트', () => {
  it('홈페이지에 정상적으로 접근 가능해야 함', () => {
    cy.visit('/');
    cy.get('body').should('exist'); // 최소한 페이지가 뜨는지만 확인
  });
});
