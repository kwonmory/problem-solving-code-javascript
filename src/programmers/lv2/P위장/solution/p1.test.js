import solution from './p1';
import {describe, expect, it} from "@jest/globals";

describe('위장', () => {

    context('with all same clothes', () => {

        it('returns clothes count', () => {

            expect(
                solution(
                    [['crow_mask', 'face'],
                    ['blue_sunglasses', 'face'],
                    ['smoky_makeup', 'face']]
                )
            ).toBe(3);
        });
    });

    context('with different clothes', () => {

        it('returns clothes count + clothe kind branch', () => {

            expect(solution(
                [['yellow_hat', 'headgear'],
                ['blue_sunglasses', 'eyewear'],
                ['green_turban', 'headgear']]
                )
            ).toBe(5);
        })
    })
});
