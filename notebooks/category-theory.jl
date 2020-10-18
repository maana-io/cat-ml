@theory Category{Ob,Hom} begin

  # Opertors
  @op begin
    (→) := Hom
    (⋅) := compose
  end

  # Types
  Ob::TYPE
  Hom(dom::Ob,codom::Ob)::TYPE

  # Terms
  id(A::Ob)::(A → A)
  compose(f::(A → B), g::(B → C))::(A → C) ⊣ (A::Ob, B::Ob, C::Ob)

  # Axioms
  ((f ⋅ g) ⋅ h == f ⋅ (g ⋅ h) ⊣ (A::Ob, B::Ob, C::Ob, D::Ob, f::(A → B), g::(B → C), h::(C → D)))
  f ⋅ id(B) == f ⊣ (A::Ob, B::Ob, f::(A → B))
  id(A) ⋅ f == f ⊣ (A::Ob, B::Ob, f::(A → B))
end