# ADR-002: No prices — paid plans are "Talk to sales"

**Date:** 2026-11
**Status:** Accepted

## Context
The product takes no payments yet. Prices are agreed with each customer.

## Decision
Show Free as free; show Pro, Business and Enterprise as "Custom" with "Talk to sales".

## Reasons
- Matches the product (its console shows the same).
- Pricing can change per customer while the market is learned.

## Consequences
- When payments arrive, Pricing.tsx and the product's plans.py change together.
