# ADR-003: Claims only when true; logos only when allowed

**Date:** 2026-11
**Status:** Accepted

## Context
A website's claims are promises a customer can hold us to, and a brand's logo is its owner's
property.

## Decision
Every feature claim is checked against the product code or developer docs; numbers, promises and
legal text need the founder. A logo is shown only from its owner's official file, unchanged, where
the owner's rules allow it; otherwise the name is written as text.

## Reasons
- A false claim costs trust and can be a legal problem.
- Several brands forbid marketing use of their logos (Splunk, Workday, AWS icons, Entra).

## Consequences
- `ASSETS.md` records each logo and its rule.
- No certification badges until a certification exists.
