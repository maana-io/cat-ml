const category_theory = {
  id: "cat",
  name: "Category Theory",
  types: [
    { id: "cat/type/ob", name: "Ob" },
    {
      id: "cat/type/hom",
      name: "Hom",
      args: [
        { id: "cat/type/hom/arg/dom", name: "dom", type: "cat/type/ob" },
        { id: "cat/type/hom/arg/codom", name: "codom", type: "cat/type/ob" },
      ],
    },
  ],
  terms: [
    {
      id: "cat/term/id",
      name: "id",
      cvars: [{ id: "cat/term/id/cvar/a", name: "A", type: "cat/type/ob" }],
      args: ["cat/term/id/arg/a"],
      type: "cat/type/hom",
      typeargs: [
        { id: "cat/type/hom/arg/dom", cvar: "cat/term/id/cvar/a" },
        { id: "cat/type/hom/arg/codom", cvar: "cat/term/id/cvar/a" },
      ],
    },
    {
      id: "cat/term/compose",
      name: "compose",
      cvars: [
        { id: "cat/term/compose/cvar/a", name: "A", type: "cat/type/ob" },
        { id: "cat/term/compose/cvar/b", name: "B", type: "cat/type/ob" },
        { id: "cat/term/compose/cvar/c", name: "C", type: "cat/type/ob" },
        {
          id: "cat/term/compose/cvar/f",
          name: "f",
          type: "cat/type/hom",
          args: [
            { id: "cat/type/hom/arg/dom", cvar: "cat/term/compose/cvar/a" },
            { id: "cat/type/hom/arg/codom", cvar: "cat/term/compose/cvar/b" },
          ],
        },
        {
          id: "cat/term/compose/cvar/g",
          name: "g",
          type: "cat/type/hom",
          args: [
            { id: "cat/type/hom/arg/dom", cvar: "cat/term/compose/cvar/b" },
            { id: "cat/type/hom/arg/codom", cvar: "cat/term/compose/cvar/c" },
          ],
        },
      ],
      args: ["cat/term/compose/cvar/f", "cat/term/compose/cvar/g"],
      type: ["cat/type/hom"],
      typeargs: [
        { id: "cat/type/hom/arg/dom", var: "cat/term/compose/cvar/a" },
        { id: "cat/type/hom/arg/codom", var: "cat/term/compose/cvar/c" },
      ],
    },
  ],
  axioms: [
    {
      id: "cat/axiom/associativity",
      cvars: [
        { id: "cat/axiom/associativity/var/a", name: "A", type: "cat/type/ob" },
        { id: "cat/term/compose/var/b", name: "B", type: "cat/type/ob" },
        { id: "cat/term/compose/var/c", name: "C", type: "cat/type/ob" },
        { id: "cat/term/compose/var/c", name: "C", type: "cat/type/ob" },
        {
          id: "cat/term/compose/arg/f",
          name: "f",
          type: "cat/type/hom",
          args: [
            { id: "cat/type/hom/arg/dom", var: "cat/term/compose/var/a" },
            { id: "cat/type/hom/arg/codom", var: "cat/term/compose/var/b" },
          ],
        },
        {
          id: "cat/term/compose/arg/g",
          name: "g",
          type: "cat/type/hom",
          args: [
            { id: "cat/type/hom/arg/dom", var: "cat/term/id/var/b" },
            { id: "cat/type/hom/arg/codom", var: "cat/term/id/var/c" },
          ],
        },
      ],
      lhs: {},
      rhs: {},
    },
  ],
  operators: [
    { id: "⋅", term: "compose" },
    { id: "→", type: "Hom" },
  ],
};
