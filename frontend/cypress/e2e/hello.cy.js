describe('기본 접속 테스트', () => {
  it('홈페이지 접속이 가능해야 함', () => {
    cy.visit('/');
    cy.contains('DCU 동아리');
  });
});
