using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class UIAnimation : MonoBehaviour
{
    public Text tooltip;

    private Animator anim;

    void Start()
    {
        anim = GetComponent<Animator>();
        anim.SetBool("IsSlidingIn", false);
    }

    public void SlideIn()
    {
        StartCoroutine(RunSlideIn());
    }

    public void SlideOut()
    {
        StartCoroutine(RunSlideOut());
    }

    private IEnumerator RunSlideIn()
    {
        while (anim.GetBool("IsSlidingIn"))
        {
            yield return null;
        }
        
        anim.SetBool("IsSlidingIn", true);
    }

    private IEnumerator RunSlideOut()
    {
        while (!anim.GetBool("IsSlidingIn"))
        {
            yield return null;
        }
        
        anim.SetBool("IsSlidingIn", false);
    }
}
