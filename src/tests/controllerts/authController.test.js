const { findUserById, findUserByEmail, createUser } = require("../../models/user");



jest.mock("../../src/models/user", () => ({
    createUser: jest.fn(),
    findUserByEmail: jest.fn(),
    findUserById: jest.fn(),
}))

describe("Auth controller tests", () => {
    descibe("POST /api/auth/register", () => ({
        it("should register when not registered and all information given", () => ({

        }));
}))

descibe("POST /api/auth/login", () => ({

}))

descibe("GET /api/auth/profile", () => ({

}))
})