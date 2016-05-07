using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class MapHover : MonoBehaviour
{
    public Sprite DefaultSprite;
    public Sprite HoverSprite;

    public GameObject upperPanel;
    public string objectName;
    public string objectDescription;

    private SpriteRenderer spriteRenderer;
    private UIAnimation upperPanelAnimation;
    private Text upperPanelTooltip;


    void Start()
    {
        spriteRenderer = GetComponent<SpriteRenderer>() as SpriteRenderer;
        upperPanelAnimation = upperPanel.GetComponent<UIAnimation>() as UIAnimation;
    }

    void OnMouseEnter()
    {
        spriteRenderer.sprite = HoverSprite;
        upperPanelAnimation.tooltip.text = objectName + ": " + objectDescription;
        upperPanelAnimation.SlideIn();
    }

    void OnMouseExit()
    {
        spriteRenderer.sprite = DefaultSprite;
        upperPanelAnimation.SlideOut();
    }
}
